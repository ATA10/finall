Projenin videosu için Youtube link : https://youtu.be/4rtrBErcEwk

-npm install
-npm run dev

Proje Amacı
Proje Endüstriyel mutfak ürünlerini ve projeleri sergileyebileceği ve serginin yapıldığı
sayfayı dinamik olarak düzenlemeler yapabileceği bir uygulamadır.

Projenin Özellikleri
Projenin oldukça kapsamlı ve çeşitli özelliklere sahiptir. İşlevselliğin ön planda olduğu
düzenleme paneli, projenin yönetimini kolaylaştıracak bir dizi özelliği içeriyor. İşte
projenin ana özellikleri:

Proje, Ürün ve Galeri Yönetimi:
Proje, ürün ve galeri verileriniz düzenleme paneli üzerinden güncellenebilir, silinebilir
ve eklenebilir.
Kullanılan veriler JSON formatında public/data klasörü altında tutulmuştur.

Sosyal Medya ve İletişim Bilgileri:
Showroom tarafında tasarım, üst kısımda görsel olarak sunulmuştur.
İletişim bilgileri ve sosyal medya hesapları bu tasarım üzerinde yer almaktadır.

Döviz Bilgileri:
TCMB'nin sağladığı API üzerinden güncel döviz bilgileri çekilir.
Bu bilgiler modal üzerinde gösterilir.

Mail İşlemi:
Mail.json’a kaydedilen mailler mail göndermeden önce normal, gönderme işlemini
yapan mailler ise yeşil renkte vurgulanmıştır.
Düzenleme Paneli:
Proje, ürün ve galeri yönetimine ek olarak, toplu mail gönderme ve mail ekleme
işlemleri yapılabilir.
Mail.json dosyasında kaydedilen mailler normal renkte, gönderme işlemi yapılan
mailler ise yeşil renkte vurgulanmıştır.

Veri Yapısı:
Projede tutulacak verilerin sayısının az olması nedeniyle, veri yapısı yerine dizin
dahilinde JSON formatında saklanmıştır.
Veriler JSON dosyalarından çağrılarak işlenir ve kullanılır.

Teknolojik Altyapı:
Proje React ve Next.js üzerinde geliştirilmiş.
Kullanılan kütüphaneler arasında Material-UI, Emotion, Axios, Nodemailer gibi
önemli araçlar bulunmaktadır.
