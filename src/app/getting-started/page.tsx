'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';

// Create a standalone translation provider for Getting Started page
const GettingStartedPage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  // Direct access to translations from separate file
  const translations = {
    en: {
      hero: {
        title: "Getting Started with Glodinas Finance",
        subtitle: "Follow our simple three-step process to get your bookkeeping set up and running smoothly."
      },
      process: {
        title: "Our Onboarding Process",
        subtitle: "We've designed a streamlined process to get you up and running quickly",
        step1: {
          title: "Sign Up for Moneybird",
          description: "Start by signing up for Moneybird using our referral link. This cloud-based bookkeeping software will be the foundation of your financial administration.",
          items: [
            "Create your Moneybird account",
            "Add Glodinas Finance as your bookkeeper",
            "Complete your basic company information"
          ],
          button: "Sign Up for Moneybird"
        },
        step2: {
          title: "Schedule a Setup Meeting",
          description: "Book a setup meeting with our team to configure your administration. We offer both in-person and remote TeamViewer sessions for your convenience.",
          items: [
            "Pay the one-time setup fee (€150 ex VAT)",
            "Choose between in-person or TeamViewer session",
            "We'll set up bank connections, client database, and invoice structure"
          ],
          button: "Schedule Setup Meeting"
        },
        step3: {
          title: "Select Your Subscription",
          description: "Choose the subscription plan that fits your business needs. We offer tailored packages for both ZZP'ers and BVs.",
          items: [
            "ZZP Bookkeeping: €130/month (ex VAT)",
            "BV Bookkeeping: €150/month (ex VAT)",
            "Automatic billing for hassle-free service"
          ],
          button1: "ZZP/BV Subscription",
          button2: "Loan Administration"
        }
      },
      expectations: {
        title: "What to Expect",
        subtitle: "Here's what happens after you complete our onboarding process",
        item1: {
          title: "Immediate Setup",
          description: "Your bookkeeping system will be fully configured and ready to use within 24-48 hours after your setup meeting."
        },
        item2: {
          title: "Ongoing Support",
          description: "You'll receive continuous support from our team to ensure your bookkeeping runs smoothly and efficiently."
        },
        item3: {
          title: "Monthly Updates",
          description: "Receive regular updates on your financial status, ensuring you always have a clear picture of your business finances."
        },
        item4: {
          title: "Tax Compliance",
          description: "We ensure your business remains compliant with all Dutch tax regulations and filing requirements."
        }
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Common questions about our onboarding process",
        questions: [
          {
            question: "How long does the setup process take?",
            answer: "The entire onboarding process typically takes 2-3 business days from initial signup to complete setup. The setup meeting itself usually lasts about 1-2 hours."
          },
          {
            question: "Do I need to prepare anything for the setup meeting?",
            answer: "Yes, please have your bank account login details, business registration information, and any existing client/invoice data ready for the setup meeting. This will help us configure your system efficiently."
          },
          {
            question: "Can I switch from another bookkeeping service?",
            answer: "Absolutely! We can help you transition from your current bookkeeping service to our system. We'll guide you through the process of transferring your financial data and ensuring a smooth transition."
          },
          {
            question: "What if I need help after the initial setup?",
            answer: "Our support doesn't end after setup. You'll have ongoing access to our team for any questions or assistance you need. We're just a phone call or email away."
          },
          {
            question: "Is there a minimum contract period?",
            answer: "Our standard subscription is month-to-month with no long-term commitment required. You can cancel at any time with 30 days' notice."
          }
        ]
      },
      cta: {
        title: "Ready to Get Started?",
        subtitle: "Start your journey with Glodinas Finance today and experience hassle-free financial management.",
        button1: "Sign Up for Moneybird",
        button2: "Contact Us"
      }
    },
    nl: {
      hero: {
        title: "Aan de Slag met Glodinas Finance",
        subtitle: "Volg ons eenvoudige driestappenproces om uw boekhouding op te zetten en soepel te laten verlopen."
      },
      process: {
        title: "Ons Onboardingproces",
        subtitle: "We hebben een gestroomlijnd proces ontworpen om u snel op weg te helpen",
        step1: {
          title: "Aanmelden voor Moneybird",
          description: "Begin met het aanmelden voor Moneybird via onze verwijzingslink. Deze cloudgebaseerde boekhoudsoftware vormt de basis van uw financiële administratie.",
          items: [
            "Maak uw Moneybird-account aan",
            "Voeg Glodinas Finance toe als uw boekhouder",
            "Vul uw basis bedrijfsinformatie in"
          ],
          button: "Aanmelden voor Moneybird"
        },
        step2: {
          title: "Plan een Installatiegesprek",
          description: "Boek een installatiegesprek met ons team om uw administratie te configureren. We bieden zowel persoonlijke als externe TeamViewer-sessies voor uw gemak.",
          items: [
            "Betaal de eenmalige installatiekosten (€150 excl. BTW)",
            "Kies tussen een persoonlijke of TeamViewer-sessie",
            "We zetten bankverbindingen, klantendatabase en factuurstructuur op"
          ],
          button: "Installatiegesprek Plannen"
        },
        step3: {
          title: "Selecteer Uw Abonnement",
          description: "Kies het abonnement dat bij uw zakelijke behoeften past. We bieden op maat gemaakte pakketten voor zowel ZZP'ers als BV's.",
          items: [
            "ZZP Boekhouding: €130/maand (excl. BTW)",
            "BV Boekhouding: €150/maand (excl. BTW)",
            "Automatische facturering voor zorgeloze service"
          ],
          button1: "ZZP/BV Abonnement",
          button2: "Leningadministratie"
        }
      },
      expectations: {
        title: "Wat te Verwachten",
        subtitle: "Dit gebeurt er nadat u ons onboardingproces heeft voltooid",
        item1: {
          title: "Directe Installatie",
          description: "Uw boekhoudsysteem wordt binnen 24-48 uur na uw installatiegesprek volledig geconfigureerd en klaar voor gebruik."
        },
        item2: {
          title: "Doorlopende Ondersteuning",
          description: "U ontvangt continue ondersteuning van ons team om ervoor te zorgen dat uw boekhouding soepel en efficiënt verloopt."
        },
        item3: {
          title: "Maandelijkse Updates",
          description: "Ontvang regelmatige updates over uw financiële status, zodat u altijd een duidelijk beeld heeft van uw bedrijfsfinanciën."
        },
        item4: {
          title: "Belastingcompliance",
          description: "We zorgen ervoor dat uw bedrijf voldoet aan alle Nederlandse belastingvoorschriften en aangiftevereisten."
        }
      },
      faq: {
        title: "Veelgestelde Vragen",
        subtitle: "Veelvoorkomende vragen over ons onboardingproces",
        questions: [
          {
            question: "Hoe lang duurt het installatieproces?",
            answer: "Het volledige onboardingproces duurt meestal 2-3 werkdagen vanaf de eerste aanmelding tot de volledige installatie. Het installatiegesprek zelf duurt ongeveer 1-2 uur."
          },
          {
            question: "Moet ik iets voorbereiden voor het installatiegesprek?",
            answer: "Ja, zorg ervoor dat u uw bankrekeninggegevens, bedrijfsregistratie-informatie en eventuele bestaande klant-/factuurgegevens bij de hand heeft voor het installatiegesprek. Dit helpt ons om uw systeem efficiënt te configureren."
          },
          {
            question: "Kan ik overstappen van een andere boekhoudservice?",
            answer: "Absoluut! We kunnen u helpen bij de overgang van uw huidige boekhoudservice naar ons systeem. We begeleiden u door het proces van het overdragen van uw financiële gegevens en zorgen voor een soepele overgang."
          },
          {
            question: "Wat als ik hulp nodig heb na de eerste installatie?",
            answer: "Onze ondersteuning eindigt niet na de installatie. U heeft doorlopend toegang tot ons team voor vragen of hulp die u nodig heeft. We zijn slechts een telefoontje of e-mail verwijderd."
          },
          {
            question: "Is er een minimale contractperiode?",
            answer: "Ons standaard abonnement is maandelijks zonder langetermijnverplichting. U kunt op elk moment opzeggen met een opzegtermijn van 30 dagen."
          }
        ]
      },
      cta: {
        title: "Klaar om te Beginnen?",
        subtitle: "Begin vandaag nog uw reis met Glodinas Finance en ervaar zorgeloos financieel beheer.",
        button1: "Aanmelden voor Moneybird",
        button2: "Contact Opnemen"
      }
    },
    ro: {
      hero: {
        title: "Primii Pași cu Glodinas Finance",
        subtitle: "Urmați procesul nostru simplu în trei pași pentru a configura și gestiona contabilitatea dumneavoastră fără probleme."
      },
      process: {
        title: "Procesul Nostru de Integrare",
        subtitle: "Am conceput un proces eficient pentru a vă ajuta să începeți rapid",
        step1: {
          title: "Înscrieți-vă la Moneybird",
          description: "Începeți prin a vă înscrie la Moneybird folosind link-ul nostru de referință. Acest software de contabilitate bazat pe cloud va fi baza administrației dumneavoastră financiare.",
          items: [
            "Creați-vă contul Moneybird",
            "Adăugați Glodinas Finance ca și contabil",
            "Completați informațiile de bază ale companiei"
          ],
          button: "Înscrieți-vă la Moneybird"
        },
        step2: {
          title: "Programați o Întâlnire de Configurare",
          description: "Programați o întâlnire de configurare cu echipa noastră pentru a configura administrația dumneavoastră. Oferim atât sesiuni în persoană, cât și la distanță prin TeamViewer pentru confortul dumneavoastră.",
          items: [
            "Plătiți taxa unică de configurare (€150 fără TVA)",
            "Alegeți între o sesiune în persoană sau prin TeamViewer",
            "Vom configura conexiunile bancare, baza de date a clienților și structura facturilor"
          ],
          button: "Programați Întâlnirea de Configurare"
        },
        step3: {
          title: "Selectați Abonamentul",
          description: "Alegeți planul de abonament care se potrivește nevoilor afacerii dumneavoastră. Oferim pachete personalizate atât pentru liber-profesioniști (ZZP), cât și pentru societăți cu răspundere limitată (BV).",
          items: [
            "Contabilitate ZZP: €130/lună (fără TVA)",
            "Contabilitate BV: €150/lună (fără TVA)",
            "Facturare automată pentru un serviciu fără griji"
          ],
          button1: "Abonament ZZP/BV",
          button2: "Administrare Împrumuturi"
        }
      },
      expectations: {
        title: "La Ce să Vă Așteptați",
        subtitle: "Iată ce se întâmplă după ce finalizați procesul nostru de integrare",
        item1: {
          title: "Configurare Imediată",
          description: "Sistemul dumneavoastră de contabilitate va fi complet configurat și gata de utilizare în 24-48 de ore după întâlnirea de configurare."
        },
        item2: {
          title: "Asistență Continuă",
          description: "Veți primi asistență continuă din partea echipei noastre pentru a vă asigura că contabilitatea dumneavoastră funcționează fără probleme și eficient."
        },
        item3: {
          title: "Actualizări Lunare",
          description: "Primiți actualizări regulate privind situația dumneavoastră financiară, asigurându-vă că aveți întotdeauna o imagine clară a finanțelor afacerii."
        },
        item4: {
          title: "Conformitate Fiscală",
          description: "Ne asigurăm că afacerea dumneavoastră rămâne conformă cu toate reglementările fiscale olandeze și cerințele de depunere."
        }
      },
      faq: {
        title: "Întrebări Frecvente",
        subtitle: "Întrebări comune despre procesul nostru de integrare",
        questions: [
          {
            question: "Cât durează procesul de configurare?",
            answer: "Întregul proces de integrare durează de obicei 2-3 zile lucrătoare de la înscrierea inițială până la configurarea completă. Întâlnirea de configurare în sine durează de obicei aproximativ 1-2 ore."
          },
          {
            question: "Trebuie să pregătesc ceva pentru întâlnirea de configurare?",
            answer: "Da, vă rugăm să aveți la îndemână detaliile de conectare la contul bancar, informațiile de înregistrare a afacerii și orice date existente despre clienți/facturi pentru întâlnirea de configurare. Acest lucru ne va ajuta să vă configurăm sistemul eficient."
          },
          {
            question: "Pot să trec de la un alt serviciu de contabilitate?",
            answer: "Absolut! Vă putem ajuta să treceți de la serviciul actual de contabilitate la sistemul nostru. Vă vom ghida prin procesul de transfer al datelor financiare și vom asigura o tranziție fără probleme."
          },
          {
            question: "Ce se întâmplă dacă am nevoie de ajutor după configurarea inițială?",
            answer: "Asistența noastră nu se încheie după configurare. Veți avea acces continuu la echipa noastră pentru orice întrebări sau asistență de care aveți nevoie. Suntem doar la un telefon sau email distanță."
          },
          {
            question: "Există o perioadă minimă de contract?",
            answer: "Abonamentul nostru standard este lunar, fără angajament pe termen lung. Puteți anula oricând cu un preaviz de 30 de zile."
          }
        ]
      },
      cta: {
        title: "Gata să Începeți?",
        subtitle: "Începeți-vă călătoria cu Glodinas Finance astăzi și experimentați un management financiar fără griji.",
        button1: "Înscrieți-vă la Moneybird",
        button2: "Contactați-ne"
      }
    },
    tr: {
      hero: {
        title: "Glodinas Finance ile Başlangıç",
        subtitle: "Muhasebenizi kurmak ve sorunsuz çalıştırmak için basit üç adımlı sürecimizi izleyin."
      },
      process: {
        title: "Başlangıç Sürecimiz",
        subtitle: "Sizi hızlı bir şekilde başlatmak için düzenli bir süreç tasarladık",
        step1: {
          title: "Moneybird'e Kaydolun",
          description: "Referans linkimizi kullanarak Moneybird'e kaydolarak başlayın. Bu bulut tabanlı muhasebe yazılımı, finansal yönetiminizin temelini oluşturacaktır.",
          items: [
            "Moneybird hesabınızı oluşturun",
            "Glodinas Finance'i muhasebeci olarak ekleyin",
            "Temel şirket bilgilerinizi tamamlayın"
          ],
          button: "Moneybird'e Kaydolun"
        },
        step2: {
          title: "Kurulum Toplantısı Planlayın",
          description: "Yönetiminizi yapılandırmak için ekibimizle bir kurulum toplantısı ayarlayın. Rahatlığınız için hem yüz yüze hem de uzaktan TeamViewer oturumları sunuyoruz.",
          items: [
            "Tek seferlik kurulum ücretini ödeyin (KDV hariç €150)",
            "Yüz yüze veya TeamViewer oturumu arasında seçim yapın",
            "Banka bağlantılarını, müşteri veritabanını ve fatura yapısını kuracağız"
          ],
          button: "Kurulum Toplantısı Planlayın"
        },
        step3: {
          title: "Aboneliğinizi Seçin",
          description: "İşletme ihtiyaçlarınıza uygun abonelik planını seçin. Hem serbest çalışanlar (ZZP) hem de limited şirketler (BV) için özel paketler sunuyoruz.",
          items: [
            "ZZP Muhasebe: €130/ay (KDV hariç)",
            "BV Muhasebe: €150/ay (KDV hariç)",
            "Sorunsuz hizmet için otomatik faturalandırma"
          ],
          button1: "ZZP/BV Aboneliği",
          button2: "Kredi Yönetimi"
        }
      },
      expectations: {
        title: "Neler Bekleyebilirsiniz",
        subtitle: "Başlangıç sürecimizi tamamladıktan sonra neler olacağına dair bilgiler",
        item1: {
          title: "Hızlı Kurulum",
          description: "Muhasebe sisteminiz, kurulum toplantınızdan sonra 24-48 saat içinde tamamen yapılandırılmış ve kullanıma hazır olacaktır."
        },
        item2: {
          title: "Sürekli Destek",
          description: "Muhasebenizin sorunsuz ve verimli çalışmasını sağlamak için ekibimizden sürekli destek alacaksınız."
        },
        item3: {
          title: "Aylık Güncellemeler",
          description: "Finansal durumunuz hakkında düzenli güncellemeler alarak, işletme finanslarınızın her zaman net bir resmini elde edin."
        },
        item4: {
          title: "Vergi Uyumluluğu",
          description: "İşletmenizin tüm Hollanda vergi düzenlemelerine ve dosyalama gereksinimlerine uygun kalmasını sağlıyoruz."
        }
      },
      faq: {
        title: "Sık Sorulan Sorular",
        subtitle: "Başlangıç sürecimiz hakkında yaygın sorular",
        questions: [
          {
            question: "Kurulum süreci ne kadar sürer?",
            answer: "Tüm başlangıç süreci genellikle ilk kayıttan tam kuruluma kadar 2-3 iş günü sürer. Kurulum toplantısının kendisi genellikle yaklaşık 1-2 saat sürer."
          },
          {
            question: "Kurulum toplantısı için bir şey hazırlamam gerekiyor mu?",
            answer: "Evet, lütfen kurulum toplantısı için banka hesabı giriş bilgilerinizi, işletme kayıt bilgilerinizi ve mevcut müşteri/fatura verilerinizi hazır bulundurun. Bu, sisteminizi verimli bir şekilde yapılandırmamıza yardımcı olacaktır."
          },
          {
            question: "Başka bir muhasebe hizmetinden geçiş yapabilir miyim?",
            answer: "Kesinlikle! Mevcut muhasebe hizmetinizden sistemimize geçmenize yardımcı olabiliriz. Finansal verilerinizi aktarma ve sorunsuz bir geçiş sağlama sürecinde size rehberlik edeceğiz."
          },
          {
            question: "İlk kurulumdan sonra yardıma ihtiyacım olursa ne olur?",
            answer: "Desteğimiz kurulumdan sonra bitmez. İhtiyaç duyduğunuz herhangi bir soru veya yardım için ekibimize sürekli erişiminiz olacak. Sadece bir telefon veya e-posta uzağındayız."
          },
          {
            question: "Minimum sözleşme süresi var mı?",
            answer: "Standart aboneliğimiz, uzun vadeli taahhüt gerektirmeyen aylık bazlıdır. 30 gün önceden bildirimde bulunarak istediğiniz zaman iptal edebilirsiniz."
          }
        ]
      },
      cta: {
        title: "Başlamaya Hazır mısınız?",
        subtitle: "Glodinas Finance ile yolculuğunuza bugün başlayın ve sorunsuz finansal yönetimi deneyimleyin.",
        button1: "Moneybird'e Kaydolun",
        button2: "Bize Ulaşın"
      }
    },
    ru: {
      hero: {
        title: "Начало работы с Glodinas Finance",
        subtitle: "Следуйте нашему простому трехэтапному процессу, чтобы настроить и обеспечить бесперебойную работу вашего бухгалтерского учета."
      },
      process: {
        title: "Наш процесс адаптации",
        subtitle: "Мы разработали оптимизированный процесс, чтобы вы могли быстро начать работу",
        step1: {
          title: "Зарегистрируйтесь в Moneybird",
          description: "Начните с регистрации в Moneybird, используя нашу реферальную ссылку. Это облачное бухгалтерское программное обеспечение станет основой вашего финансового администрирования.",
          items: [
            "Создайте свою учетную запись Moneybird",
            "Добавьте Glodinas Finance в качестве вашего бухгалтера",
            "Заполните основную информацию о компании"
          ],
          button: "Зарегистрироваться в Moneybird"
        },
        step2: {
          title: "Запланируйте встречу по настройке",
          description: "Запланируйте встречу по настройке с нашей командой для конфигурации вашего администрирования. Мы предлагаем как личные, так и удаленные сессии TeamViewer для вашего удобства.",
          items: [
            "Оплатите единовременную плату за настройку (€150 без НДС)",
            "Выберите между личной встречей или сессией TeamViewer",
            "Мы настроим банковские соединения, базу данных клиентов и структуру счетов"
          ],
          button: "Запланировать встречу по настройке"
        },
        step3: {
          title: "Выберите подписку",
          description: "Выберите план подписки, который соответствует потребностям вашего бизнеса. Мы предлагаем индивидуальные пакеты как для самозанятых (ZZP), так и для компаний с ограниченной ответственностью (BV).",
          items: [
            "Бухгалтерия ZZP: €130/месяц (без НДС)",
            "Бухгалтерия BV: €150/месяц (без НДС)",
            "Автоматическое выставление счетов для беспроблемного обслуживания"
          ],
          button1: "Подписка ZZP/BV",
          button2: "Администрирование кредитов"
        }
      },
      expectations: {
        title: "Чего ожидать",
        subtitle: "Вот что происходит после завершения нашего процесса адаптации",
        item1: {
          title: "Немедленная настройка",
          description: "Ваша бухгалтерская система будет полностью настроена и готова к использованию в течение 24-48 часов после встречи по настройке."
        },
        item2: {
          title: "Постоянная поддержка",
          description: "Вы будете получать постоянную поддержку от нашей команды, чтобы обеспечить бесперебойную и эффективную работу вашего бухгалтерского учета."
        },
        item3: {
          title: "Ежемесячные обновления",
          description: "Получайте регулярные обновления о вашем финансовом состоянии, обеспечивая всегда четкое представление о финансах вашего бизнеса."
        },
        item4: {
          title: "Соответствие налоговым требованиям",
          description: "Мы обеспечиваем соответствие вашего бизнеса всем голландским налоговым правилам и требованиям к подаче документов."
        }
      },
      faq: {
        title: "Часто задаваемые вопросы",
        subtitle: "Общие вопросы о нашем процессе адаптации",
        questions: [
          {
            question: "Сколько времени занимает процесс настройки?",
            answer: "Весь процесс адаптации обычно занимает 2-3 рабочих дня от первоначальной регистрации до полной настройки. Сама встреча по настройке обычно длится около 1-2 часов."
          },
          {
            question: "Нужно ли мне что-то подготовить для встречи по настройке?",
            answer: "Да, пожалуйста, подготовьте данные для входа в банковский счет, информацию о регистрации бизнеса и любые существующие данные о клиентах/счетах для встречи по настройке. Это поможет нам эффективно настроить вашу систему."
          },
          {
            question: "Могу ли я перейти с другого бухгалтерского сервиса?",
            answer: "Абсолютно! Мы можем помочь вам перейти с вашего текущего бухгалтерского сервиса на нашу систему. Мы проведем вас через процесс передачи ваших финансовых данных и обеспечим плавный переход."
          },
          {
            question: "Что делать, если мне нужна помощь после первоначальной настройки?",
            answer: "Наша поддержка не заканчивается после настройки. У вас будет постоянный доступ к нашей команде для любых вопросов или помощи, которая вам может понадобиться. Мы всего лишь на расстоянии телефонного звонка или электронного письма."
          },
          {
            question: "Есть ли минимальный срок контракта?",
            answer: "Наша стандартная подписка - ежемесячная, без долгосрочных обязательств. Вы можете отменить в любое время с уведомлением за 30 дней."
          }
        ]
      },
      cta: {
        title: "Готовы начать?",
        subtitle: "Начните свой путь с Glodinas Finance сегодня и испытайте беспроблемное финансовое управление.",
        button1: "Зарегистрироваться в Moneybird",
        button2: "Связаться с нами"
      }
    }
  };
  
  // Get translations for current language or fallback to English
  const getLocalizedContent = () => {
    return translations[currentLanguage] || translations.en;
  };
  
  const content = getLocalizedContent();
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.hero.title}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">{content.hero.subtitle}</p>
        </div>
      </div>
      
      {/* Process Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content.process.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{content.process.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">{content.process.step1.title}</h3>
                <p className="text-gray-600 mb-4">{content.process.step1.description}</p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  {content.process.step1.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="https://moneybird.com/" target="_blank" rel="noopener noreferrer" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center transition duration-150">
                  {content.process.step1.button}
                </a>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">{content.process.step2.title}</h3>
                <p className="text-gray-600 mb-4">{content.process.step2.description}</p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  {content.process.step2.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center transition duration-150">
                  {content.process.step2.button}
                </Link>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">{content.process.step3.title}</h3>
                <p className="text-gray-600 mb-4">{content.process.step3.description}</p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  {content.process.step3.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/services" className="block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center transition duration-150">
                    {content.process.step3.button1}
                  </Link>
                  <Link href="/services#personal-loans" className="block bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-2 px-4 rounded text-center transition duration-150">
                    {content.process.step3.button2}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Expectations Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content.expectations.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{content.expectations.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{content.expectations.item1.title}</h3>
              <p className="text-gray-600">{content.expectations.item1.description}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{content.expectations.item2.title}</h3>
              <p className="text-gray-600">{content.expectations.item2.description}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{content.expectations.item3.title}</h3>
              <p className="text-gray-600">{content.expectations.item3.description}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{content.expectations.item4.title}</h3>
              <p className="text-gray-600">{content.expectations.item4.description}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content.faq.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{content.faq.subtitle}</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {content.faq.questions.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.cta.title}</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">{content.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://moneybird.com/" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-md text-lg transition duration-150">
              {content.cta.button1}
            </a>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-6 rounded-md text-lg transition duration-150">
              {content.cta.button2}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStartedPage;
