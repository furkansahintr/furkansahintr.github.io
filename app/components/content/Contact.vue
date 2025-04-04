<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const { profile } = useAppConfig()
const { t } = useI18n()

const isResendEnabled = useRuntimeConfig().public.resend
const timer = ref<number>(0)
let intervalId: number | null = null

const state = ref({
  email: '',
  message: '',
  phone: '',
  fullname: '',
  subject: '',
  it: '',
})

const schema = z.object({
  email: z.string().email(t('contact.validation.email')),
  message: z.string().min(10, t('contact.validation.message_min')),
  subject: z.string().min(5, t('contact.validation.subject_min')),
  fullname: z.string().min(3, t('contact.validation.fullname_min')),
})
type Schema = z.output<typeof schema>

const loading = ref(false)

async function onSubmit(event: FormSubmitEvent<Schema>) {
  if (timer.value < 5 || state.value.it) {
    return
  }

  loading.value = true
  try {
    await $fetch('/api/emails/send', {
      method: 'POST',
      body: event.data,
    })
    state.value = {
      email: '',
      message: '',
      phone: '',
      fullname: '',
      subject: '',
      it: '',
    }
    toast.success(t('contact.success'))
  }
  catch {
    toast.error(t('contact.error'))
  }
  loading.value = false
}

const startTimer = () => {
  if (intervalId === null) {
    intervalId = window.setInterval(() => {
      timer.value++
    }, 1000)
  }
}

const stopTimer = () => {
  if (intervalId !== null) {
    clearInterval(intervalId)
    intervalId = null
  }
}

onMounted(startTimer)
onUnmounted(stopTimer)
</script>

<template>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20">
    <h1 class="font-newsreader italic text-white-shadow text-center text-4xl">
      <slot
        name="title"
        mdc-unwrap="p"
      />
    </h1>
    <h2 class="text-center text-lg font-extralight italic text-muted">
      <slot
        name="subtitle"
        mdc-unwrap="p"
      />
    </h2>
    <Divider class="mb-8 mt-2" />
    <div class="flex flex-col sm:items-center sm:justify-between">
      <UForm
        :state
        :schema
        class="flex w-full max-w-[40rem] flex-col gap-3"
        @submit="onSubmit"
      >
        <UFormField
          :label="t('contact.fullname')"
          name="fullname"
          required
        >
          <UInput
            v-model="state.fullname"
            type="text"
            autocomplete="name"
            class="w-full"
            placeholder="John Doe"
          />
        </UFormField>

        <UFormField
          :label="t('contact.email')"
          name="email"
          required
        >
          <UInput
            v-model="state.email"
            autocomplete="email"
            class="w-full"
            placeholder="john.doe@gmail.com"
          />
        </UFormField>

        <UFormField
          :label="t('contact.phone')"
          name="phone"
        >
          <UInput
            v-model="state.phone"
            autocomplete="tel"
            class="w-full"
            placeholder="123-456-7890"
          />
        </UFormField>

        <UFormField
          :label="t('contact.subject')"
          name="subject"
          required
        >
          <UInput
            v-model="state.subject"
            class="w-full"
            :placeholder="$t('contact.subject')"
          />
        </UFormField>

        <UFormField
          :label="t('contact.message')"
          name="message"
          required
        >
          <UTextarea
            v-model="state.message"
            autoresize
            class="w-full"
            :rows="4"
            :placeholder="t('contact.description')"
          />
        </UFormField>
        <UFormField
          label="Name"
          name="it"
          required
          class="h-0 invisible"
        >
          <UInput
            v-model="state.it"
            class="w-full"
          />
        </UFormField>
        <div class="flex justify-center">
          <UTooltip
            :disabled="isResendEnabled"
            :text="$t('contact.disabled')"
          >
            <UButton
              :loading
              :disabled="!isResendEnabled"
              type="submit"
              block
            >
              {{ $t("contact.submit") }}
            </UButton>
          </UTooltip>
        </div>
      </UForm>
      <Divider class="my-10" />
      <div class="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
        <div class="flex flex-col gap-3">
          <dd class="flex items-center gap-3 text-neutral-400">
            <UIcon
              name="heroicons-phone"
              class="size-6"
              aria-hidden="true"
            />
            <span>
              {{ profile.phone }}
            </span>
          </dd>
          <dd class="flex items-center gap-3 text-neutral-400">
            <UIcon
              name="heroicons-envelope"
              class="size-6"
              aria-hidden="true"
            />
            <UTooltip
              :text="$t('global.email')"
              :shortcuts="['⌘', 'O']"
            >
              <NuxtLink
                :to="`mailto:${profile.email}`"
                class="cursor-pointer transition-colors duration-300"
              >
                {{ profile.email }}
              </NuxtLink>
            </UTooltip>
          </dd>
        </div>
        <div>
          <MeetingButton />
        </div>
      </div>
    </div>
  </section>
</template>
