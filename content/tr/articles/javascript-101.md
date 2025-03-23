---
title: "JavaScript 101: Genel Kavramlar"
date: 22/06/2023
description: JavaScript geliştiricilerinin bilmesi gereken 101 kavram ve açıklamaları.
tags:
  - Geliştirme
  - Verimlilik
image: https://furkansahin.tr/articles/launch-your-porfolio.jpg
readingTime: "23"
published: true
---

## Giriş

Bu yazıda front-end ekosisteminin temeli olan JavaScript’e dair bilinmesi gereken ve kendini bu alanda geliştirmeyi hedefleyenler için fayda sağlayacak 101 genel kavramları açıklamaları ile sıraladım.

![preview](/articles/js-101.jpg)

### 1. Web Browser

Browserlar, internet kullanıcılarının web sitelerinin depolandığı sunuculara bağlanmasını, içeriğin işlenmesini, içeriklerin görüntülenmesini ve içeriklerin depolanmasını sağlayan yazılımlardır.

### 2. Browser API’s
Tarayıcı API’leri (Browser API’s), web tarayıcılarının sunduğu, web uygulamalarının tarayıcı üzerinde çalışmasını sağlayan programlama arayüzleridir. Bu API’ler, JavaScript kodu tarafından kullanılarak tarayıcı ile etkileşime geçilmesine olanak tanır ve web uygulamalarının kullanıcı arayüzü, ağ istekleri, veri depolama, zamanlayıcılar, olaylar ve daha birçok işlevi gerçekleştirmek için kullanılabilir.

### 3. WebAssembly (WASM)
Web Browser’larımızda sadece JavaScript çalıştırmanın dışında C, C++, Rust gibi hemen hemen bütün programlama dilleriyle kod yazabilmemizi sağlayan yazılımdır.

### 4. ECMAScript
Ecma International tarafından ECMA-262 dokümanında yayınlanan ve her yıl yenilenen JavaScript gibi betik dilleri için bir standart.

### 5. HTML
Hyper Text Markup Language, web sayfalarını oluşturmak için kullanılan standart metin işaretleme dilidir. CSS ve JavaScript ile görsel ve dinamik siteler oluşturulabilir.

### 6. High Level
High Level (yüksek seviye) ve Low Level (düşük seviye) bizlere dillerin “0,1” makine diline yakınlıklarını belirtir. JavaScript bir High Level programlama dilidir.

### 7. Interpreter
Yorumlayıcı (interpreter), yüksek seviyeli programlama dili ile yazılmış programları satır satır makine diline çevirip bu adımları çalıştıran programdır.

### 8. Scripting Language
Scripting Languages (Betik diller), derlemeye gerek duymayan yorumlanabilir ve öğrenmesi daha kolay dillerdir. JavaScript, Python bunlara örnektir.

### 9. Runtime
JavaScript’in çalışma zamanı (Runtime), kodun tarayıcıda yürütüldüğü süredir ve tarayıcı, kodu yürütmek için bir JavaScript motoru içerir. Örneğin, Google Chrome tarayıcısının JavaScript motoru V8'dir, Mozilla Firefox’un JavaScript motoru ise SpiderMonkey’dir.

### 10. V8 Engine
V8 engine, JavaScript kodunun yürütülmesi için kullanılan bir yüksek performanslı JavaScript motorudur. Kodu derleyerek hızlı bir şekilde çalıştırır.

### 11. Browser Dev Tools
Browser Dev Tools (Tarayıcı Geliştirici Araçları), web sayfalarını incelemek, hata ayıklamak, performansı analiz etmek ve daha birçok işlevi gerçekleştirmek için kullanılan bir araçlardır.

### 12. Just-In-Time Compilation
JavaScript, genellikle yorumlanan bir programlama dilidir. Ancak, performansı artırmak için, birçok JavaScript motoru JIT derleme teknolojisini kullanır. JIT derleme, JavaScript kodunu yorumlamak yerine, kodu çalıştırılmak üzere doğrudan makine koduna dönüştürür.

### 13. Script Tag
Script Tag (Script etiketi), istemci tarafında çalıştırılacak JavaScript gibi bir script tanımlamak için kullanılır. JavaScript kodları Genellikle html kodunun en sonuna, <script> etiketleri arasına yazılır.

### 14. Src Attribute
“src”, harici bir betik dosyasının URL’sini belirtir. Harici bir JavaScript dosyasını <script> etiketinde src attribute ile kullanarak sayfamıza ekleyebiliriz.

### 15. Console Log
Console Log, web tarayıcılarının geliştirici araçlarında yer alan bir fonksiyondur ve JavaScript kodu içindeki hataları bulmak, kodun çalışmasını takip etmek ve belirli bir mesajı konsol panelinde görüntülemek için kullanılır.

### 16. Dynamically Typed
Dynamically Typed (Dinamik Tip), veri türlerinin değişebildiği bir tür sistemidir. Bu, değişkenlerin tanımlanırken veri türünün belirtilmediği veya değişkenlerin farklı veri türleriyle doldurulabileceği anlamına gelir.

### 17. Primitive
Primitive, programlama dillerinde temel veri tiplerine verilen isimdir. Bu tipler, programlama dillerinde en sık kullanılan veri tipleridir ve diğer veri tipleri bu temel veri tiplerinin bir kombinasyonundan oluşur. Örneğin, JavaScript gibi bir programlama dilinde, yedi temel veri tipi vardır: string, number, bigint, boolean, undefined, symbol, null.

### 18. Mutable
Mutable, JavaScript’te bir veri türünün değiştirilebilir olması anlamına gelir. Bu, bir nesnenin veya bir dizi gibi bir veri yapısının özelliklerinin veya elemanlarının, programın herhangi bir noktasında değiştirilebileceği anlamına gelir.

### 19. Undefined
Undefined, bir değişkenin atanmamış veya var olmayan bir değerini ifade eder. Bu değer, değişkenin bir değerle atanmadığı durumlarda varsayılan olarak atanır.

### 20. Null
Null, bilerek veya isteyerek, hiçbir şeye atanmış olduğunu ifade eder. Bu değer, bir değişkenin bir nesne veya dizi gibi bir veri yapısından ayrılması veya bir değerin bilinçli olarak silinmesi durumunda da atanabilir.

### 21. String

String, JavaScript’te bir veri türüdür ve metinleri ifade eder. Bir string, bir veya daha fazla karakterden oluşan bir dizidir.

### 22. Object

Object, JavaScript’te bir veri türüdür ve bir nesneyi temsil eder. İçerisinde birden fazla değeri depolayan yapılardır.

### 23. Semicolons

JavaScript’de Semicolons (;), ifadeleri ayırmak için kullanılan bir karakterdir. JavaScript’de semicolon-optional (noktalı virgül isteğe bağlı) bir dil olduğu için, her zaman semicolon kullanmak zorunda değilsiniz. Ancak, semicolon kullanımı, kodun daha anlaşılır ve hatasız hale getirilmesine yardımcı olabilir.

### 24. Lexical Environment

“Lexical Environment” terimi, bir kod bloğu içindeki değişkenlerin, fonksiyonların ve diğer tanımlayıcıların nerede tanımlandığı ve hangi değere sahip olduğunu tutan bir yapıdır. Bu yapı, JavaScript motoru tarafından otomatik olarak oluşturulur ve her fonksiyonun kendi Lexical Environment’ı vardır.

### 25. Global Scope

Global Scope (genel kapsam), en yüksek kapsam düzeyidir ve tüm fonksiyonlar ve kod blokları için erişilebilirdir. Global scope içinde tanımlanan değişkenler ve fonksiyonlar, tüm kod blokları ve fonksiyonlar tarafından erişilebilir hale gelir.

### 26. Local Scope

Local Scope (yerel kapsam), bir kod bloğu veya fonksiyon içinde tanımlanan değişkenlerin sadece o blok veya fonksiyon içinde erişilebilir olmasıdır. Bu, değişkenlerin yalnızca tanımlandıkları blok veya fonksiyon içinde kullanılacağı anlamına gelir ve diğer blok veya fonksiyonlardan erişilemez hale gelir.

### 27. Block Scope

Block Scope (blok kapsamı), bir kod bloğu içinde tanımlanan değişkenlerin sadece o blok içinde erişilebilir olmasıdır. Bu, değişkenlerin yalnızca tanımlandıkları blok içinde kullanılacağı anlamına gelir ve diğer bloklardan veya fonksiyonlardan erişilemez hale gelir.

### 28. Let

JavaScript programlama dilinde bir değişken tanımlama anahtar kelimesidir. “let” kullanılarak tanımlanan değişkenler blok kapsamında olur, yani sadece tanımlandıkları blok içerisinde geçerlidir.

### 29. Const

JavaScript’te bir değişkenin sadece bir kez tanımlanabileceği ve sonradan değeri değiştirilemeyeceği anlamına gelir. “const” ile tanımlanan bir değişken, “let” ile tanımlanan bir değişkene benzer şekilde “block scope” kapsamındadır.

### 30. Var

JavaScript’te bir değişken tanımlamak için kullanılır. “var” ile tanımlanan bir değişken, “function scope” kapsamındadır, yani değişken, tanımlandığı fonksiyon içinde geçerlidir ve fonksiyon dışındaki diğer kod bloklarından erişilemez.

### 31. Hoisting

Hoisting “yukarı çekmek” anlamına gelmektedir. JavaScript’te bir değişken kullanıldıktan sonra tanımlanabilir.

### 32. Function

Belirli bir işlevi yerine getirmek için kullanılan bir kod bloğudur. Bir fonksiyon, belirli bir işlevi yerine getirmek için tasarlanmış ve çağrıldığında çalıştırılabilen bir kod bloğudur. Fonksiyonlar, kodun tekrar kullanılabilirliğini artırır ve daha kolay okunabilir ve yönetilebilir kod yazmanıza yardımcı olur.

### 33. Parameters

Fonksiyon bildiriminde fonksiyona girdi olarak verilen ve kullanılan değişkenlere Parameters denir.

### 34. Arguments

Fonksiyon çağrılırken gönderilen değerlere Arguments denir.

### 35. Return

Fonksiyonlar return anahtar kelimesi geldiğinde çalışmayı durdurur ve değer döndürür.

### 36. Function Expressions

Fonksiyonlar bir değişkene veya özelliğe atanarak ya da parametre olarak gönderilirken de tanımlanabilirler. Bu şekilde tanımlamaya ise Fonksiyon İfadeler (Function Expressions) denir.

### 37. Higher Order Function

Higher Order Function (yüksek dereceli fonksiyon) diğer fonksiyonları argüman olarak alır veya bir fonksiyon döndürür. Bu, fonksiyonların, diğer fonksiyonları çalıştırabilen ve/veya manipüle edebilen bir veri türü olduğu anlamına gelir.

### 38. Closures

JavaScript’de closure, iç içe fonksiyonlar kullanılarak oluşturulan bir yapıdır ve bir fonksiyonun dışarıdan erişilemeyen değişkenleri ve fonksiyonları koruyabilmesini sağlar.

### 39. Call Stack

JavaScript kodunda bir fonksiyonun çağrıldığında ve çalıştığında takip edilen bir veri yapısıdır. JavaScript, çağrılan bir fonksiyonun çağrıldığı sırayı hatırlamak için bir çağrı yığını kullanır.

### 40. Heap

Heap, programın çalışma zamanında dinamik olarak tahsis edilen bellek bloklarının saklandığı bir bölgedir. Bu bellek blokları, programın çalışması sırasında ihtiyaç duyulan veri yapıları ve nesneler gibi verileri içerebilir.

### 41. This

JavaScript’de this, o anki bağlamda bulunan nesneyi temsil eden bir referansdır. Global bağlamda, this window yada global’i temsil eder.

### 42. Window yada Global

JavaScript çalışma zamanının en üst düzeyinde tanımlanmış bir nesnedir. Tarayıcı ortamında window, global nesneyi temsil ederken, Node.js gibi ortamlarda global kullanılır.

### 43. Bind

Bir fonksiyona belirli bir bağlamı atayarak yeni bir fonksiyon oluşturmak için kullanılan bir yöntemdir. bind yöntemi, bir fonksiyonun this değerini ve/veya argümanlarını belirli bir nesneye bağlamak için kullanılır.

### 44. Arrow Function

Arrow function (ok işareti (=>) ile de temsil edilir), ES6 (ECMAScript 6) sürümü ile birlikte gelen kısa bir fonksiyon syntax’ıdır.

### 45. Anonymous

İsimsiz veya adlandırılmamış bir işlev veya nesne anlamına gelir. JavaScript’te anonim fonksiyonlar ve anonim nesneler, isim vermeden doğrudan kullanılabilen ve genellikle kısa süreliğine veya yerel kullanımlar için kullanılan kod bloklarıdır.

### 46. Passed By Value (Değer ile Geçirme)

JavaScript, bazı temel veri türlerinde (sayılar, stringler ve boolean değerler) ve değerlerin kopyalanarak aktarıldığı nesne olmayan veri türlerinde değeri ile geçirme yöntemini kullanır. Yani, bir fonksiyona bu tür değerler geçirildiğinde, fonksiyonun argümanları, orijinal değerin bir kopyası oluşturularak işleme alınır ve orijinal değer değiştirilmez.

### 47. Passed By Reference (Referans ile Geçirme)

JavaScript, nesne (object) ve dizilerde ise referans ile geçirme yöntemini kullanır. Yani, bir fonksiyona nesne veya dizi geçirildiğinde, fonksiyonun argümanı, orijinal nesnenin veya dizinin referansını taşır ve işlemler bu referans üzerinde gerçekleşir. Bu nedenle, fonksiyon içinde yapılan değişiklikler, orijinal nesneyi veya diziyi etkiler.

### 48. Object Literal

Object Literal, bir nesneyi doğrudan kod içinde tanımlamak için kullanılan bir sözdizimidir.

### 49. Object Constructor

Yeni object oluşturmak için kullanılan bir fonksiyon şablonunu ifade eder. JavaScript’de, bir object constructor’ı kullanarak bir nesne şablonu oluşturabiliriz ve bu şablondan yeni nesneler oluşturabiliriz.

### 50. Property

Bir nesnenin sahip olduğu değerlere ve fonksiyonlara verilen genel bir isimdir. JavaScript, nesneleri oluşturmak için kullanılan bir nesne tabanlı programlama dilidir ve nesneler, özellik-değer çiftleri veya anahtar-değer çiftleri şeklinde temsil edilir.

### 51. Prototype Chain

Nesne tabanlı programlamada nesneler arasındaki ilişkiyi ifade eden bir terimdir. JavaScript, prototip tabanlı bir nesne tabanlı programlama dilidir ve nesneler arasındaki ilişkiler, prototipler ve prototip zinciri aracılığıyla gerçekleştirilir.

### 52. Inheritance

Nesne tabanlı programlamada bir nesnenin başka bir nesneden özelliklerini ve yöntemlerini devralmasıdır. Bir nesne, kendisinden önce tanımlanmış olan bir başka nesneye ait olan özelliklere ve yöntemlere erişebilir ve bunları kullanabilir.

### 53. OOP

Türkçe karşılığıyla Nesne Tabanlı Programlama, bir yazılımın temel yapı taşlarını oluşturan nesnelerin kullanıldığı bir yaklaşımdır. Her nesne, verileri ve onlar üzerinde işlem yapabilen yöntemleri (fonksiyonları) içeren bir yapıdır.

### 54. Classes

ECMAScript 2015 (ES6) sürümünden itibaren class anahtar kelimesini kullanarak sınıf tabanlı programlamayı destekler. JavaScript'de class anahtar kelimesi ile sınıflar oluşturulabilir ve bu sınıflardan nesneler (örnekler) oluşturulabilir.

### 55. Constructor

JavaScript’deki class, constructor adında bir metod kullanarak bir sınıfın nesnesinin başlatılması ve başlangıç değerlerinin atanması sağlanır.

### 56. Get/Set

Get ve Set, JavaScript’deki özel fonksiyonlardır ve sınıfların veya nesnelerin özelliklerinin okunmasını (get) veya yazılmasını (set) kontrol etmek için kullanılır. Bu fonksiyonlar, özelliklere erişim sırasında belirli mantıkları veya işlemleri uygulamak için kullanılabilir.

### 57. Instance Method

Bir sınıfın örneklerine (nesnelere) ait olan ve bu örnekler üzerinden çağrılabilen metotlardır. Her bir sınıf örneği için ayrı bir kopya oluşturulur ve nesnelere ait verileri veya davranışları işlemek için kullanılırlar.

### 58. Static Method

Bir sınıfın örneklerine (nesnelere) değil, doğrudan sınıfa ait olan ve sınıf üzerinden çağrılabilen metotlardır. Herhangi bir sınıf örneği (nesnesi) oluşturulmadan, sınıfın adı üzerinden doğrudan çağrılabilirler.

### 59. Array

Birden fazla değeri aynı değişkende tutmak için kullanılan bir veri tipidir. Bir dizi, aynı değişkende birden fazla değeri sıralı olarak tutar ve bu değerlere indekslerle erişilebilir. Diziler karmaşık veri yapılarını temsil etmek, veri kümesini işlemek ve koleksiyonlarda veri depolamak için yaygın olarak kullanılır.

### 60. Set

Benzersiz değerleri tutabilen bir koleksiyon nesnesidir. Bir set, sıralı olmayan ve tekrarlanan değerlere izin vermez. Herhangi bir veri tipinden (number, string, boolean, object, vs.) değeri içerebilir. Set, bir diziye benzer, ancak dizilerden farklı olarak elemanlara indeksle değil, doğrudan değeri kullanarak erişilir.

### 61. Map

Key-value (anahtar-değer) çiftlerini tutan bir koleksiyon nesnesidir. Map, nesne (Object) ile benzerdir, ancak Map, key (anahtar) olarak nesneleri kullanabilirken, nesnelerin sadece string veya sembol değerleri olarak kullanılabildiği JavaScript nesnelerinden (Object) farklıdır. Yani, Map’ler, herhangi bir veri tipini anahtar olarak kullanabilir ve bu anahtarlarla ilişkili değerleri depolayabilir.

### 62. Garbage Collection

Garbage Collection (Çöp Toplama), kullanılmayan nesnelerin bellekten otomatik olarak temizlenmesini sağlayan bir süreçtir. Program tarafından artık erişilemeyen nesnelerin bellekten kaldırılması ile bellek kullanımının optimize edilmesini sağlar ve bellek sızıntılarının önlenmesine yardımcı olur.

### 63. Weakmap & Weakset

Zayıf (weak) referanslara dayalı koleksiyon nesneleridir. Bunlar, nesnelerin bellek yönetimini sağlamak için kullanılan özel türlerdir ve Garbage Collection (Çöp Toplama) süreçlerine dahil olma şekilleri bakımından diğer koleksiyon türlerinden farklıdırlar.

### 64. Event Loop

Event Loop (Olay Döngüsü), JavaScript ve diğer bazı programlama dillerinde asenkron işlemleri ve olayları yönetmek için kullanılan bir mekanizmadır.

### 65. Sync

“Sync” terimi, “synchronize” (eşzamanlı hale getirmek) kelimesinden türetilmiştir ve aynı anda veya aynı zaman aralığında gerçekleşen olayları ifade eder. Programlama bağlamında “sync” terimi, işlemlerin sırayla ve bloklayıcı bir şekilde gerçekleştiği, bir işlemin tamamlanmasının diğer işlemlerin başlamadan önce beklediği anlamında kullanılabilir.

### 66. Async

“Async” terimi, “asynchronous” (asyonkron) kelimesinin kısaltmasıdır ve bir işlemin aynı anda veya aynı zaman aralığında gerçekleşmediği, ancak belirli bir süre sonra veya bir olayın tamamlandığında gerçekleşen işlemleri ifade eder. Programlama bağlamında “async” terimi, genellikle eşzamanlı veya senkron (sync) işlemlerle karşılaştırılarak kullanılır.

### 67. Single Threaded

Bir bilgisayar programının ya da bir işletim sisteminin, bir anda sadece bir işlemci iş parçacığı üzerinde çalışabileceği anlamına gelir. Başka bir deyişle, single-threaded bir sistemde, program veya işletim sistemi, bir anda sadece tek bir işlemi gerçekleştirir ve diğer işlemleri aynı anda yapamaz.

### 68. SetTimeOut

setTimeout JavaScript'te kullanılan bir fonksiyondur ve belirli bir zaman aralığı sonunda belirtilen bir işlevin çalıştırılmasını sağlar.

### 69. CallBack

Bir işlemin tamamlandığında veya bir olayın meydana geldiğinde çalıştırılması gereken bir işlevi (fonksiyonu) ifade eder. Bir callback fonksiyonu, başka bir fonksiyona argüman olarak geçilir ve o fonksiyonun tamamlandığı zaman veya olay gerçekleştiğinde otomatik olarak çağrılır.

### 70. CallBack Hell

JavaScript kodunda yoğun olarak iç içe geçmiş ve karmaşık hale gelmiş callback fonksiyonlarının kullanıldığı durumları ifade eder. Callback Hell, kodun okunabilirliğini, bakımını ve geliştirilebilirliğini zorlaştırabilir ve karmaşık hatalara neden olabilir.

### 71. Promise

Promise, JavaScript’te asenkron işlemleri yönetmek için kullanılan bir nesnedir. Promise, gelecekte tamamlanacak bir işlemin sonucunu temsil eder ve bu sonuca ulaşıldığında, sonuç başarıyla tamamlanmışsa bir değer (resolve), hatalı tamamlanmışsa bir hata (reject) döndürür.

### 72. Then/Catch

Promise nesneleri ile ilişkilendirilen metodlardır ve asenkron işlemlerin sonuçlarını ve hatalarını ele almaya yardımcı olur.

### 73. Await

Asenkron işlemleri yönetmek için kullanılan bir anahtar sözcüktür ve sadece “async” işlevler içinde kullanılabilir. “await” anahtar sözcüğü, bir asenkron işlemin tamamlanmasını bekler ve işlemin sonucunu alırken kodun bloke olmasını engeller.

### 74. Try/Catch

try ve catch terimleri, hata yönetimi için kullanılan yapıları ifade eder. try bloğu, hata olasılığı olan kod parçacıklarını içeren bir yapıdır. Eğer try bloğu içinde bir hata meydana gelirse, kod çalışması try bloğunun hemen sonrasına geçmez vecatch bloğuna atlar.

### 75. ES Modules

ES Modules (ECMAScript Modules), JavaScript’in bir modülerleşme sistemi olarak kullanılabilir bir özelliğidir. JavaScript kodunu bağımsız modüller halinde organize etmeyi sağlar ve modüller arasında kodun paylaşılmasına, yeniden kullanılmasına ve güncellenmesine olanak tanır.

### 76. Default Import/Export

JavaScript ES Modules’da, “default import” ve “default export” terimleri, modül içinde varsayılan olarak bir ana nesnenin veya bir fonksiyonun nasıl aktarıldığını ifade eder.

```
moduleFirst.js

export default function sayHello() {
  console.log("Hello!");
}

moduleSecond.js

import sayHello from './moduleFirst.js';

sayHello(); // Hello!
```

### 77. Named Import/Export

JavaScript ES Modules’da, “named import” ve “named export” terimleri, modül içindeki belirli nesnelerin veya değerlerin nasıl aktarıldığını ifade eder.

```
moduleFirst.js

export function sayHello() {
  console.log("Hello!");
}

export function sayGoodbye() {
  console.log("Good bye!");
}

moduleSecond.js

import { sayHello } from './moduleFirst.js';

sayHello(); // Hello!
sayGoodbye(); // Good bye!
```

### 78. NPM

NPM (Node Package Manager), JavaScript programlama dilinde kullanılan bir paket yöneticisidir. Node.js, JavaScript kodunu sunucu tarafında çalıştırmaya olanak tanıyan bir platformdur ve NPM, Node.js projelerinde kullanılan harici paketlerin yönetimini kolaylaştırır.

### 79. Yarn

Yarn, JavaScript kodunun paketler halinde yönetilmesini sağlayan bir paket yöneticisi ve bağımlılık yönetim aracıdır. Yarn, npm (Node Package Manager) ile benzer işlevlere sahip olsa da, bazı ek özelliklere sahiptir ve daha hızlı ve güvenilir bir paket yönetim deneyimi sunmayı hedefler.

### 80. Pnpm

pnpm, JavaScript kodunun paketlerini yönetmek için kullanılan bir paket yöneticisi ve bağımlılık yönetim aracıdır. Pnpm, paketlerinizi proje kökünde tek bir “node_modules” klasörü yerine, her paketin ayrı ayrı bir klasöre kurulmasını sağlar. Yarn ve npm’e alternatif olarak kullanılabilir.

### 81. Node Modules

“node_modules”, Node.js projelerinde kullanılan bağımlılıkların ve paketlerin bulunduğu bir klasördür. Node.js, JavaScript kodunu çalıştırmak için kullanılan bir platformdur ve projelerde genellikle dış kaynaklı kütüphaneler veya modüller kullanılır. Bu kütüphaneler veya modüller, projenin ihtiyaç duyduğu ek işlevselliği sağlamak için kullanılır ve “node_modules” klasörüne yerleştirilir.

### 82. Package.JSON

package.json, bir JavaScript projesinin kök dizininde yer alan bir dosyadır ve proje hakkında meta verileri içerir. Bir projenin paket bağımlılıklarını, sürüm numaralarını, proje adını, açıklamasını, ana geliştiricileri, lisansını ve diğer projeye ilişkin bilgileri içeren bir JSON dosyasıdır. package.json, bir JavaScript projesinin yapılandırmasını ve yönetimini kolaylaştırır ve genellikle bir proje için başlangıç noktasıdır.

### 83. DOM

DOM, Document Object Model (Belge Nesne Modeli) kısaltmasıdır ve web tarayıcılarında kullanılan bir programlama arayüzünü ifade eder. DOM, HTML veya XML belgelerini temsil eden bir nesne tabanlı modeldir ve web sayfalarını dinamik olarak değiştirmek veya manipüle etmek için kullanılır.

### 84. Document

Bir web sayfasının temsil edildiği nesnedir. JavaScript, web sayfalarındaki HTML içeriği ile etkileşim kurmak için kullanılan bir programlama dilidir. Document nesnesi, web sayfasının yapısını ve içeriğini temsil eden bir nesnedir ve JavaScript kodu tarafından kullanılarak web sayfası üzerinde değişiklikler yapılabilir.

### 85. QuerySelector

querySelector JavaScript'de kullanılan bir metodtur ve Document nesnesine bağlı olarak çalışır. Bu metod, belirtilen bir CSS seçiciyi kullanarak, bir web sayfasındaki ilk uygun elemanı döndürür.

### 86. Selector

“Selector” (seçici), CSS ve JavaScript gibi web teknolojilerinde, belirli HTML öğelerini veya gruplarını hedeflemek için kullanılan bir ifadedir. Bir seçici, bir veya birden fazla HTML öğesini tanımlamak için kullanılan bir desendir.

### 87. QuerySelectorAll

querySelectorAll JavaScript'de kullanılan bir metodtur ve Document nesnesine bağlı olarak çalışır. Bu metod, belirtilen bir CSS seçiciyi kullanarak, bir web sayfasındaki tüm uygun elemanları bir NodeList (düğüm listesi) nesnesi olarak döndürür.

### 88. Element

Element, JavaScript'te, bir HTML veya XML dokümanındaki bir HTML etiketini veya bir XML etiketini temsil eden bir nesnedir. Element, Node sınıfının alt sınıfıdır ve bir HTML veya XML öğesini temsil eden düğümleri ifade eden bir DOM arayüzü sunar.

### 89. Event

“Event” (olay), bir web sayfasındaki kullanıcı etkileşimleri veya belirli bir öğenin durumu gibi gerçekleşen bir olayı temsil eden bir nesnedir. Web sayfalarında kullanıcı etkileşimlerini (örneğin, tıklama, fare hareketi, klavye tuşlarına basma) ve diğer olayları (örneğin, bir öğenin yüklenmesi tamamlandığında) algılamak için kullanılır.

### 90. Imperative

“Imperative” (emredici), bir programın nasıl yapıldığını belirtmek için emirlerin kullanıldığı bir programlama yaklaşımını ifade eder. Bu yaklaşım, bir programın aşamalarını adım adım belirtir ve belirli bir sonuca ulaşmak için hangi adımların gerçekleştirilmesi gerektiğini açıkça tanımlar.

### 91. Declarative

“Declarative” (bildirimsel), bir programın ne yapılacağını tanımlayan ve programın nasıl yapılacağına dair ayrıntılı talimatlar vermeyen bir programlama yaklaşımını ifade eder. Bu yaklaşımda, bir sonucun ne olması gerektiği beyan edilir ve program, sonucu elde etmek için gerekli adımları otomatik olarak belirler.

### 92. Components

Bir yazılım sistemi veya uygulamanın bir parçası olan ve belirli bir işlevi veya görevi yerine getiren bağımsız ve yeniden kullanılabilir bir yapıya sahip olan kod bloklarını ifade eder. Bileşenler, genellikle modüler bir yapıda tasarlanmıştır ve birbirleriyle etkileşim halinde olabilirler.

### 93. Data Binding

Kullanıcı arayüzünde veya uygulama mantığında kullanılan verilerin, kullanıcı arayüzü bileşenleri veya uygulama mantığındaki bileşenler arasında otomatik olarak güncellenen bir mekanizmayla bağlanmasıdır. Bu, verilerin bir bileşen veya bileşenlerdeki değişikliklerin otomatik olarak diğer bileşenlere yansıtılmasını sağlar.

### 94. Module Bundling

“Module bundling” (modül paketleme), bir veya birden fazla modülün, genellikle ayrı ayrı dosyalar halinde bulunan kod parçalarının, tek bir dosya halinde birleştirilerek paketlenmesi işlemidir. Bu, web uygulamalarında veya JavaScript tabanlı projelerde kullanılan bir yaklaşımdır ve kodun daha etkili bir şekilde dağıtılmasını, yüklenmesini ve çalıştırılmasını sağlar.

### 95. Network Waterfall

“Network waterfall” (ağ şelalesi), web performans analizinde kullanılan bir terimdir ve bir web sayfasının ağ üzerindeki yüklenme süreçlerini, zaman çizelgesi şeklinde görselleştiren bir grafik veya rapor anlamına gelir. Bu terim, web sayfasının yüklenme süreçlerini, sırasıyla gerçekleşen ağ istekleri ve yanıtlarını, zaman içindeki değişimleri ve gecikmeleri gösteren bir grafik şeklinde sunar.

### 96. Dynamic Imports

“Dynamic imports” (dinamik içe aktarmalar), bir programın veya kodun çalışma zamanında, yani programın yürütülme anında, modülleri veya kod parçalarını dinamik olarak yüklemek ve kullanmak için kullanılan bir mekanizmadır. Bu, programın çalışma zamanında ihtiyaç duyulan modülleri veya kod parçalarını gerektiğinde yükleyebilmesini ve kullanabilmesini sağlar.

### 97. Node.JS

Node.js, JavaScript tabanlı bir platform ve çalışma zamanı ortamıdır. V8 JavaScript motorunu temel alarak, sunucu tarafında JavaScript kodu çalıştırmak için kullanılır. Node.js, Google tarafından geliştirilen ve açık kaynaklı bir projedir.

### 98. Express

Express, Node.js ortamında web uygulamaları geliştirmek için kullanılan, minimal ve esnek bir web uygulama çerçevesidir. Express, web uygulaması geliştirmeyi hızlandırmak ve kolaylaştırmak için bir dizi HTTP yönetim işlevi ve temel web uygulama yapıları sunar.

### 99. Metaframework

“Metaframework” (meta çerçeve), başka bir çerçevenin veya framework’ün üzerine inşa edilmiş bir çerçeveyi ifade eder. Yani, metaframework, başka bir çerçevenin veya framework’ün temel alındığı ve onun üzerine ek işlevlerin eklenerek geliştirildiği bir çerçevedir.

### 100. TypeScript

TypeScript, Microsoft tarafından geliştirilen, JavaScript tabanlı bir dildir ve JavaScript kodunu genişleten ve geliştiren bir süper kümesidir. TypeScript, açık kaynaklı ve statik tip denetimi özellikleri ile geliştiricilere daha güçlü ve tip güvenli bir geliştirme deneyimi sunar.

### 101. ESLint

ESLint, JavaScript kodunu hataları, stil hataları ve kod kalitesi hataları açısından analiz eden açık kaynaklı bir JavaScript linter aracıdır. Linting, kodun belirli stil kılavuzlarına, en iyi uygulamalara ve kod kalitesi standartlarına uygun olup olmadığını denetleme işlemidir.
