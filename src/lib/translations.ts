export interface Translation {
  nav: {
    home: string;
    about: string;
    education: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    tagline: string;
    downloadCV: string;
    contactMe: string;
  };
  about: {
    title: string;
    description: string;
    location: string;
    email: string;
    phone: string;
    portfolio: string;
  };
  education: {
    title: string;
    degree: string;
    university: string;
    gpa: string;
    location: string;
    period: string;
  };
  experience: {
    title: string;
    jobs: {
      title: string;
      company: string;
      period: string;
      description: string[];
    }[];
  };
  skills: {
    title: string;
    categories: {
      programming: string;
      database: string;
      tools: string;
      certifications: string;
      languages: string;
    };
    items: {
      programming: string[];
      database: string[];
      tools: string[];
      certifications: string[];
      languages: string[];
    };
  };
  projects: {
    title: string;
    items: {
      title: string;
      description: string;
      period: string;
      technologies: string[];
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
    };
  };
  common: {
    darkMode: string;
    lightMode: string;
    language: string;
  };
}

export const translations: Record<string, Translation> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      education: "Education",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Muhammad Zulfan Anggadhiputra",
      title: "Informatics Engineering Student",
      tagline: "Skilled in software development, database programming, and multimedia applications with a passion for applying emerging technologies to real-world solutions.",
      downloadCV: "Download CV",
      contactMe: "Contact Me"
    },
    about: {
      title: "About Me",
      description: "Informatics undergraduate skilled in software development, database programming, and multimedia applications. Experienced in lab assistance and software R&D projects, with a passion for applying emerging technologies to real-world solutions.",
      location: "Bandung, Jawa Barat 40283",
      email: "zulfanangga2908@gmail.com",
      phone: "+6285156927928",
      portfolio: "https://zulfan15.github.io/MZulfan"
    },
    education: {
      title: "Education",
      degree: "Undergraduate, Informatics",
      university: "Institut Teknologi Nasional Bandung",
      gpa: "GPA: 3.46",
      location: "Bandung, Jawa Barat",
      period: "2022 - Present"
    },
    experience: {
      title: "Experience",
      jobs: [
        {
          title: "Database Programming Laboratory Assistant",
          company: "Institut Teknologi Nasional Bandung",
          period: "Sep 2024 - Jan 2025",
          description: [
            "Served as instructor for introductory database concept and application development.",
            "Guided students to design, implement and integrate databases into real-world application using Delphi7.",
            "Provided one-on-one mentoring to help students troubleshoot coding and database issues."
          ]
        },
        {
          title: "Object-Oriented Programming Laboratory Assistant",
          company: "Institut Teknologi Nasional Bandung",
          period: "Mar 2025 - June 2025",
          description: [
            "Served as instructor for object-oriented programming fundamentals (Java).",
            "Assisted students in applying OOP principles (encapsulation, inheritance, polymorphism) in software development projects.",
            "Mentored student teams to develop small-to-medium scale applications with best coding practices."
          ]
        },
        {
          title: "Computer Network Laboratory Assistant",
          company: "Institut Teknologi Nasional Bandung",
          period: "Mar 2025 - June 2025",
          description: [
            "Served as instructor for computer networking fundamentals and configuration.",
            "Guided students in setting up LAN, configuring routers/switches, and implementing TCP/IP protocols.",
            "Supported students in network troubleshooting, security basics, and client-server project assignments."
          ]
        },
        {
          title: "Software Development Intern",
          company: "PT Dwi Purwa Teknologi",
          period: "July 2025 - Sep 2025",
          description: [
            "Assisted in research and development (R&D) of digital solutions for client projects.",
            "Contributed to adding new features in an in-progress software application.",
            "Collaborated with senior developers to test, debug, and improve application performance.",
            "Gained hands-on experience in the software development lifecycle within a digital consulting environment."
          ]
        }
      ]
    },
    skills: {
      title: "Skills & Expertise",
      categories: {
        programming: "Programming & Development",
        database: "Database & Networking",
        tools: "Tools & Software",
        certifications: "Certifications",
        languages: "Languages"
      },
      items: {
        programming: ["Java", "Python", "C", "JavaScript", "Node.js", "Flutter", "Delphi 7"],
        database: ["MySQL", "Huawei Firewall", "MikroTik"],
        tools: ["Visual Studio Code", "IntelliJ IDEA", "NetBeans", "Android Studio", "Arduino IDE", "eNSP", "Adobe Animate", "Adobe Premiere", "Canva", "Figma", "Power BI", "Katalon Studio", "Selenium", "Windows", "Red Hat", "Ubuntu"],
        certifications: ["Huawei Certified ICT Associate - Security (HCIA-Security V4.0)"],
        languages: ["Indonesian - Native", "English - Intermediate"]
      }
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "Remote Control Tank",
          description: "IoT-based prototype integrating ESP32, sensors, and motor drivers with Flutter mobile control and web dashboard.",
          period: "Sep 2024 - Jan 2025",
          technologies: ["ESP32", "Flutter", "IoT", "Web Dashboard"]
        },
        {
          title: "Deep Learning Image Classification with InceptionV3",
          description: "Developed and evaluated deep learning models using InceptionV3 for image classification tasks. Applied transfer learning and fine-tuning techniques on datasets.",
          period: "Mar 2024 - June 2025",
          technologies: ["Python", "InceptionV3", "Deep Learning", "Transfer Learning"]
        }
      ]
    },
    contact: {
      title: "Get In Touch",
      subtitle: "I'm always open to discussing new opportunities and interesting projects.",
      form: {
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        send: "Send Message"
      }
    },
    common: {
      darkMode: "Dark Mode",
      lightMode: "Light Mode",
      language: "Language"
    }
  },
  de: {
    nav: {
      home: "Startseite",
      about: "Über mich",
      education: "Bildung",
      experience: "Erfahrung",
      skills: "Fähigkeiten",
      projects: "Projekte",
      contact: "Kontakt"
    },
    hero: {
      greeting: "Hallo, ich bin",
      name: "Muhammad Zulfan Anggadhiputra",
      title: "Informatik-Student",
      tagline: "Erfahren in Softwareentwicklung, Datenbankprogrammierung und Multimedia-Anwendungen mit einer Leidenschaft für die Anwendung neuer Technologien auf reale Lösungen.",
      downloadCV: "Lebenslauf herunterladen",
      contactMe: "Kontaktieren Sie mich"
    },
    about: {
      title: "Über mich",
      description: "Informatik-Student mit Fähigkeiten in Softwareentwicklung, Datenbankprogrammierung und Multimedia-Anwendungen. Erfahrung in Laborassistenz und Software-F&E-Projekten, mit einer Leidenschaft für die Anwendung neuer Technologien auf reale Lösungen.",
      location: "Bandung, Jawa Barat 40283",
      email: "zulfanangga2908@gmail.com",
      phone: "+6285156927928",
      portfolio: "https://zulfan15.github.io/MZulfan"
    },
    education: {
      title: "Bildung",
      degree: "Bachelor, Informatik",
      university: "Institut Teknologi Nasional Bandung",
      gpa: "GPA: 3.46",
      location: "Bandung, Jawa Barat",
      period: "2022 - Gegenwart"
    },
    experience: {
      title: "Berufserfahrung",
      jobs: [
        {
          title: "Laborassistent für Datenbankprogrammierung",
          company: "Institut Teknologi Nasional Bandung",
          period: "Sep 2024 - Jan 2025",
          description: [
            "Fungierte als Dozent für einführende Datenbankkonzepte und Anwendungsentwicklung.",
            "Leitete Studenten bei der Gestaltung, Implementierung und Integration von Datenbanken in reale Anwendungen mit Delphi7 an.",
            "Bereitstellung von Einzelbetreuung zur Hilfe bei der Fehlerbehebung von Programmier- und Datenbankproblemen."
          ]
        },
        {
          title: "Laborassistent für Objektorientierte Programmierung",
          company: "Institut Teknologi Nasional Bandung",
          period: "Mär 2025 - Jun 2025",
          description: [
            "Fungierte als Dozent für objektorientierte Programmiergrundlagen (Java).",
            "Unterstützte Studenten bei der Anwendung von OOP-Prinzipien in Softwareentwicklungsprojekten.",
            "Mentoring von Studententeams zur Entwicklung kleiner bis mittlerer Anwendungen mit bewährten Kodierungspraktiken."
          ]
        },
        {
          title: "Computernetzwerk-Laborassistent",
          company: "Institut Teknologi Nasional Bandung",
          period: "Mär 2025 - Jun 2025",
          description: [
            "Fungierte als Dozent für Computernetzwerk-Grundlagen und -Konfiguration.",
            "Leitete Studenten bei der Einrichtung von LANs, Konfiguration von Routern/Switches und Implementierung von TCP/IP-Protokollen an.",
            "Unterstützte Studenten bei Netzwerk-Troubleshooting, Sicherheitsgrundlagen und Client-Server-Projektaufgaben."
          ]
        },
        {
          title: "Software-Entwicklungspraktikant",
          company: "PT Dwi Purwa Teknologi",
          period: "Jul 2025 - Sep 2025",
          description: [
            "Unterstützte bei Forschung und Entwicklung (F&E) digitaler Lösungen für Kundenprojekte.",
            "Beitrag zur Hinzufügung neuer Features in einer laufenden Softwareanwendung.",
            "Zusammenarbeit mit erfahrenen Entwicklern zum Testen, Debuggen und Verbessern der Anwendungsleistung.",
            "Sammelte praktische Erfahrungen im Software-Entwicklungslebenszyklus in einem digitalen Beratungsumfeld."
          ]
        }
      ]
    },
    skills: {
      title: "Fähigkeiten & Expertise",
      categories: {
        programming: "Programmierung & Entwicklung",
        database: "Datenbank & Netzwerk",
        tools: "Tools & Software",
        certifications: "Zertifizierungen",
        languages: "Sprachen"
      },
      items: {
        programming: ["Java", "Python", "C", "JavaScript", "Node.js", "Flutter", "Delphi 7"],
        database: ["MySQL", "Huawei Firewall", "MikroTik"],
        tools: ["Visual Studio Code", "IntelliJ IDEA", "NetBeans", "Android Studio", "Arduino IDE", "eNSP", "Adobe Animate", "Adobe Premiere", "Canva", "Figma", "Power BI", "Katalon Studio", "Selenium", "Windows", "Red Hat", "Ubuntu"],
        certifications: ["Huawei Certified ICT Associate - Security (HCIA-Security V4.0)"],
        languages: ["Indonesisch - Muttersprache", "Englisch - Fortgeschritten"]
      }
    },
    projects: {
      title: "Projekte",
      items: [
        {
          title: "Ferngesteuerter Panzer",
          description: "IoT-basierter Prototyp mit ESP32, Sensoren und Motortreibern mit Flutter-Mobilsteuerung und Web-Dashboard.",
          period: "Sep 2024 - Jan 2025",
          technologies: ["ESP32", "Flutter", "IoT", "Web Dashboard"]
        },
        {
          title: "Deep Learning Bildklassifizierung mit InceptionV3",
          description: "Entwicklung und Bewertung von Deep Learning-Modellen mit InceptionV3 für Bildklassifizierungsaufgaben. Anwendung von Transfer Learning und Fine-Tuning-Techniken auf Datensätzen.",
          period: "Mär 2024 - Jun 2025",
          technologies: ["Python", "InceptionV3", "Deep Learning", "Transfer Learning"]
        }
      ]
    },
    contact: {
      title: "Kontakt aufnehmen",
      subtitle: "Ich bin immer offen für Diskussionen über neue Möglichkeiten und interessante Projekte.",
      form: {
        name: "Ihr Name",
        email: "Ihre E-Mail",
        message: "Ihre Nachricht",
        send: "Nachricht senden"
      }
    },
    common: {
      darkMode: "Dunkler Modus",
      lightMode: "Heller Modus",
      language: "Sprache"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      education: "Éducation",
      experience: "Expérience",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact"
    },
    hero: {
      greeting: "Bonjour, je suis",
      name: "Muhammad Zulfan Anggadhiputra",
      title: "Étudiant en Génie Informatique",
      tagline: "Compétent en développement logiciel, programmation de bases de données et applications multimédias avec une passion pour l'application de technologies émergentes aux solutions du monde réel.",
      downloadCV: "Télécharger CV",
      contactMe: "Me contacter"
    },
    about: {
      title: "À propos de moi",
      description: "Étudiant en informatique compétent en développement logiciel, programmation de bases de données et applications multimédias. Expérience en assistance de laboratoire et projets R&D logiciels, avec une passion pour l'application de technologies émergentes aux solutions du monde réel.",
      location: "Bandung, Jawa Barat 40283",
      email: "zulfanangga2908@gmail.com",
      phone: "+6285156927928",
      portfolio: "https://zulfan15.github.io/MZulfan"
    },
    education: {
      title: "Éducation",
      degree: "Licence, Informatique",
      university: "Institut Teknologi Nasional Bandung",
      gpa: "MPC: 3.46",
      location: "Bandung, Jawa Barat",
      period: "2022 - Présent"
    },
    experience: {
      title: "Expérience",
      jobs: [
        {
          title: "Assistant de Laboratoire de Programmation de Base de Données",
          company: "Institut Teknologi Nasional Bandung",
          period: "Sep 2024 - Jan 2025",
          description: [
            "Servi comme instructeur pour les concepts de base de données introductifs et le développement d'applications.",
            "Guidé les étudiants dans la conception, l'implémentation et l'intégration de bases de données dans des applications du monde réel en utilisant Delphi7.",
            "Fourni un mentorat individuel pour aider les étudiants à résoudre les problèmes de codage et de base de données."
          ]
        },
        {
          title: "Assistant de Laboratoire de Programmation Orientée Objet",
          company: "Institut Teknologi Nasional Bandung",
          period: "Mar 2025 - Juin 2025",
          description: [
            "Servi comme instructeur pour les fondamentaux de la programmation orientée objet (Java).",
            "Aidé les étudiants à appliquer les principes POO dans les projets de développement logiciel.",
            "Mentoré des équipes d'étudiants pour développer des applications de petite à moyenne échelle avec les meilleures pratiques de codage."
          ]
        },
        {
          title: "Assistant de Laboratoire de Réseau Informatique",
          company: "Institut Teknologi Nasional Bandung",
          period: "Mar 2025 - Juin 2025",
          description: [
            "Servi comme instructeur pour les fondamentaux et la configuration des réseaux informatiques.",
            "Guidé les étudiants dans la configuration de LAN, la configuration de routeurs/commutateurs, et l'implémentation des protocoles TCP/IP.",
            "Soutenu les étudiants dans le dépannage réseau, les bases de la sécurité, et les affectations de projets client-serveur."
          ]
        },
        {
          title: "Stagiaire en Développement Logiciel",
          company: "PT Dwi Purwa Teknologi",
          period: "Juil 2025 - Sep 2025",
          description: [
            "Assisté dans la recherche et développement (R&D) de solutions numériques pour les projets clients.",
            "Contribué à l'ajout de nouvelles fonctionnalités dans une application logicielle en cours.",
            "Collaboré avec des développeurs seniors pour tester, déboguer et améliorer les performances des applications.",
            "Acquis une expérience pratique dans le cycle de vie du développement logiciel dans un environnement de conseil numérique."
          ]
        }
      ]
    },
    skills: {
      title: "Compétences & Expertise",
      categories: {
        programming: "Programmation & Développement",
        database: "Base de données & Réseau",
        tools: "Outils & Logiciels",
        certifications: "Certifications",
        languages: "Langues"
      },
      items: {
        programming: ["Java", "Python", "C", "JavaScript", "Node.js", "Flutter", "Delphi 7"],
        database: ["MySQL", "Huawei Firewall", "MikroTik"],
        tools: ["Visual Studio Code", "IntelliJ IDEA", "NetBeans", "Android Studio", "Arduino IDE", "eNSP", "Adobe Animate", "Adobe Premiere", "Canva", "Figma", "Power BI", "Katalon Studio", "Selenium", "Windows", "Red Hat", "Ubuntu"],
        certifications: ["Huawei Certified ICT Associate - Security (HCIA-Security V4.0)"],
        languages: ["Indonésien - Natif", "Anglais - Intermédiaire"]
      }
    },
    projects: {
      title: "Projets",
      items: [
        {
          title: "Char Télécommandé",
          description: "Prototype basé sur l'IoT intégrant ESP32, capteurs et pilotes de moteur avec contrôle mobile Flutter et tableau de bord web.",
          period: "Sep 2024 - Jan 2025",
          technologies: ["ESP32", "Flutter", "IoT", "Tableau de bord Web"]
        },
        {
          title: "Classification d'Images par Deep Learning avec InceptionV3",
          description: "Développé et évalué des modèles de deep learning utilisant InceptionV3 pour les tâches de classification d'images. Application de techniques d'apprentissage par transfert et de réglage fin sur des jeux de données.",
          period: "Mar 2024 - Juin 2025",
          technologies: ["Python", "InceptionV3", "Deep Learning", "Transfer Learning"]
        }
      ]
    },
    contact: {
      title: "Entrer en Contact",
      subtitle: "Je suis toujours ouvert à discuter de nouvelles opportunités et de projets intéressants.",
      form: {
        name: "Votre Nom",
        email: "Votre Email",
        message: "Votre Message",
        send: "Envoyer le Message"
      }
    },
    common: {
      darkMode: "Mode Sombre",
      lightMode: "Mode Clair",
      language: "Langue"
    }
  },
  ja: {
    nav: {
      home: "ホーム",
      about: "私について",
      education: "教育",
      experience: "経験",
      skills: "スキル",
      projects: "プロジェクト",
      contact: "コンタクト"
    },
    hero: {
      greeting: "こんにちは、私は",
      name: "ムハンマド・ズルファン・アンガディプトラ",
      title: "情報工学学生",
      tagline: "ソフトウェア開発、データベースプログラミング、マルチメディアアプリケーションに熟練し、新興技術を実世界のソリューションに適用することに情熱を持っています。",
      downloadCV: "履歴書をダウンロード",
      contactMe: "お問い合わせ"
    },
    about: {
      title: "私について",
      description: "ソフトウェア開発、データベースプログラミング、マルチメディアアプリケーションに熟練した情報学部学生。実験室助手やソフトウェアR&Dプロジェクトの経験があり、新興技術を実世界のソリューションに適用することに情熱を持っています。",
      location: "バンドン、西ジャワ 40283",
      email: "zulfanangga2908@gmail.com",
      phone: "+6285156927928",
      portfolio: "https://zulfan15.github.io/MZulfan"
    },
    education: {
      title: "教育",
      degree: "学部、情報学",
      university: "Institut Teknologi Nasional Bandung",
      gpa: "GPA: 3.46",
      location: "バンドン、西ジャワ",
      period: "2022年 - 現在"
    },
    experience: {
      title: "経験",
      jobs: [
        {
          title: "データベースプログラミング実験室助手",
          company: "Institut Teknologi Nasional Bandung",
          period: "2024年9月 - 2025年1月",
          description: [
            "入門データベース概念とアプリケーション開発の指導員として勤務。",
            "Delphi7を使用して実世界のアプリケーションにデータベースを設計、実装、統合するよう学生を指導。",
            "学生のコーディングとデータベースの問題のトラブルシューティングを支援するマンツーマンメンタリングを提供。"
          ]
        },
        {
          title: "オブジェクト指向プログラミング実験室助手",
          company: "Institut Teknologi Nasional Bandung",
          period: "2025年3月 - 2025年6月",
          description: [
            "オブジェクト指向プログラミング基礎（Java）の指導員として勤務。",
            "ソフトウェア開発プロジェクトでOOP原則を適用する学生を支援。",
            "最良のコーディング実践で小～中規模アプリケーションを開発する学生チームをメンタリング。"
          ]
        },
        {
          title: "コンピュータネットワーク実験室助手",
          company: "Institut Teknologi Nasional Bandung",
          period: "2025年3月 - 2025年6月",
          description: [
            "コンピュータネットワーク基礎と設定の指導員として勤務。",
            "LAN設定、ルーター/スイッチ設定、TCP/IPプロトコル実装で学生を指導。",
            "ネットワークトラブルシューティング、セキュリティ基礎、クライアント-サーバープロジェクト課題で学生をサポート。"
          ]
        },
        {
          title: "ソフトウェア開発インターン",
          company: "PT Dwi Purwa Teknologi",
          period: "2025年7月 - 2025年9月",
          description: [
            "クライアントプロジェクトのデジタルソリューションの研究開発（R&D）を支援。",
            "進行中のソフトウェアアプリケーションに新機能を追加することに貢献。",
            "シニア開発者と協力してアプリケーションのテスト、デバッグ、パフォーマンス向上を実施。",
            "デジタルコンサルティング環境でソフトウェア開発ライフサイクルの実践経験を獲得。"
          ]
        }
      ]
    },
    skills: {
      title: "スキル・専門知識",
      categories: {
        programming: "プログラミング・開発",
        database: "データベース・ネットワーク",
        tools: "ツール・ソフトウェア",
        certifications: "認定",
        languages: "言語"
      },
      items: {
        programming: ["Java", "Python", "C", "JavaScript", "Node.js", "Flutter", "Delphi 7"],
        database: ["MySQL", "Huawei Firewall", "MikroTik"],
        tools: ["Visual Studio Code", "IntelliJ IDEA", "NetBeans", "Android Studio", "Arduino IDE", "eNSP", "Adobe Animate", "Adobe Premiere", "Canva", "Figma", "Power BI", "Katalon Studio", "Selenium", "Windows", "Red Hat", "Ubuntu"],
        certifications: ["Huawei Certified ICT Associate - Security (HCIA-Security V4.0)"],
        languages: ["インドネシア語 - ネイティブ", "英語 - 中級"]
      }
    },
    projects: {
      title: "プロジェクト",
      items: [
        {
          title: "リモートコントロールタンク",
          description: "ESP32、センサー、モータードライバーを統合し、Flutterモバイル制御とWebダッシュボードを備えたIoTベースのプロトタイプ。",
          period: "2024年9月 - 2025年1月",
          technologies: ["ESP32", "Flutter", "IoT", "Webダッシュボード"]
        },
        {
          title: "InceptionV3によるディープラーニング画像分類",
          description: "画像分類タスクのためのInceptionV3を使用したディープラーニングモデルの開発と評価。データセットに転移学習とファインチューニング技術を適用。",
          period: "2024年3月 - 2025年6月",
          technologies: ["Python", "InceptionV3", "ディープラーニング", "転移学習"]
        }
      ]
    },
    contact: {
      title: "お問い合わせ",
      subtitle: "新しい機会や興味深いプロジェクトについて話し合うことをいつでも歓迎します。",
      form: {
        name: "お名前",
        email: "メールアドレス",
        message: "メッセージ",
        send: "メッセージを送信"
      }
    },
    common: {
      darkMode: "ダークモード",
      lightMode: "ライトモード",
      language: "言語"
    }
  },
  ko: {
    nav: {
      home: "홈",
      about: "소개",
      education: "학력",
      experience: "경험",
      skills: "기술",
      projects: "프로젝트",
      contact: "연락처"
    },
    hero: {
      greeting: "안녕하세요, 저는",
      name: "무하마드 줄판 앙가디푸트라",
      title: "정보공학과 학생",
      tagline: "소프트웨어 개발, 데이터베이스 프로그래밍, 멀티미디어 애플리케이션에 숙련되어 있으며, 신기술을 실제 솔루션에 적용하는 것에 열정을 가지고 있습니다.",
      downloadCV: "이력서 다운로드",
      contactMe: "연락하기"
    },
    about: {
      title: "소개",
      description: "소프트웨어 개발, 데이터베이스 프로그래밍, 멀티미디어 애플리케이션에 숙련된 정보학과 학생입니다. 실험실 조교와 소프트웨어 R&D 프로젝트 경험이 있으며, 신기술을 실제 솔루션에 적용하는 것에 열정을 가지고 있습니다.",
      location: "반둥, 자와바랏 40283",
      email: "zulfanangga2908@gmail.com",
      phone: "+6285156927928",
      portfolio: "https://zulfan15.github.io/MZulfan"
    },
    education: {
      title: "학력",
      degree: "학사, 정보학",
      university: "Institut Teknologi Nasional Bandung",
      gpa: "GPA: 3.46",
      location: "반둥, 자와바랏",
      period: "2022년 - 현재"
    },
    experience: {
      title: "경험",
      jobs: [
        {
          title: "데이터베이스 프로그래밍 실험실 조교",
          company: "Institut Teknologi Nasional Bandung",
          period: "2024년 9월 - 2025년 1월",
          description: [
            "입문 데이터베이스 개념 및 애플리케이션 개발 강사로 근무.",
            "Delphi7을 사용하여 실제 애플리케이션에 데이터베이스를 설계, 구현, 통합하도록 학생들을 지도.",
            "학생들의 코딩 및 데이터베이스 문제 해결을 돕기 위한 일대일 멘토링 제공."
          ]
        },
        {
          title: "객체지향 프로그래밍 실험실 조교",
          company: "Institut Teknologi Nasional Bandung",
          period: "2025년 3월 - 2025년 6월",
          description: [
            "객체지향 프로그래밍 기초(Java) 강사로 근무.",
            "소프트웨어 개발 프로젝트에서 OOP 원칙을 적용하는 학생들을 지원.",
            "최고의 코딩 관행으로 소규모에서 중간 규모 애플리케이션을 개발하는 학생 팀을 멘토링."
          ]
        },
        {
          title: "컴퓨터 네트워크 실험실 조교",
          company: "Institut Teknologi Nasional Bandung",
          period: "2025년 3월 - 2025년 6월",
          description: [
            "컴퓨터 네트워킹 기초 및 구성 강사로 근무.",
            "LAN 설정, 라우터/스위치 구성, TCP/IP 프로토콜 구현에서 학생들을 지도.",
            "네트워크 문제 해결, 보안 기초, 클라이언트-서버 프로젝트 과제에서 학생들을 지원."
          ]
        },
        {
          title: "소프트웨어 개발 인턴",
          company: "PT Dwi Purwa Teknologi",
          period: "2025년 7월 - 2025년 9월",
          description: [
            "클라이언트 프로젝트를 위한 디지털 솔루션의 연구개발(R&D)을 지원.",
            "진행 중인 소프트웨어 애플리케이션에 새로운 기능 추가에 기여.",
            "시니어 개발자들과 협력하여 애플리케이션 테스트, 디버깅, 성능 개선 수행.",
            "디지털 컨설팅 환경에서 소프트웨어 개발 생명주기의 실무 경험 획득."
          ]
        }
      ]
    },
    skills: {
      title: "기술 및 전문성",
      categories: {
        programming: "프로그래밍 및 개발",
        database: "데이터베이스 및 네트워킹",
        tools: "도구 및 소프트웨어",
        certifications: "자격증",
        languages: "언어"
      },
      items: {
        programming: ["Java", "Python", "C", "JavaScript", "Node.js", "Flutter", "Delphi 7"],
        database: ["MySQL", "Huawei Firewall", "MikroTik"],
        tools: ["Visual Studio Code", "IntelliJ IDEA", "NetBeans", "Android Studio", "Arduino IDE", "eNSP", "Adobe Animate", "Adobe Premiere", "Canva", "Figma", "Power BI", "Katalon Studio", "Selenium", "Windows", "Red Hat", "Ubuntu"],
        certifications: ["Huawei Certified ICT Associate - Security (HCIA-Security V4.0)"],
        languages: ["인도네시아어 - 원어민", "영어 - 중급"]
      }
    },
    projects: {
      title: "프로젝트",
      items: [
        {
          title: "원격 제어 탱크",
          description: "ESP32, 센서, 모터 드라이버를 통합하고 Flutter 모바일 제어 및 웹 대시보드가 있는 IoT 기반 프로토타입.",
          period: "2024년 9월 - 2025년 1월",
          technologies: ["ESP32", "Flutter", "IoT", "웹 대시보드"]
        },
        {
          title: "InceptionV3를 이용한 딥러닝 이미지 분류",
          description: "이미지 분류 작업을 위한 InceptionV3를 사용한 딥러닝 모델 개발 및 평가. 데이터셋에 전이학습 및 파인튜닝 기법 적용.",
          period: "2024년 3월 - 2025년 6월",
          technologies: ["Python", "InceptionV3", "딥러닝", "전이학습"]
        }
      ]
    },
    contact: {
      title: "연락하기",
      subtitle: "새로운 기회와 흥미로운 프로젝트에 대해 언제든지 논의할 수 있습니다.",
      form: {
        name: "이름",
        email: "이메일",
        message: "메시지",
        send: "메시지 보내기"
      }
    },
    common: {
      darkMode: "다크 모드",
      lightMode: "라이트 모드",
      language: "언어"
    }
  },
  zh: {
    nav: {
      home: "首页",
      about: "关于我",
      education: "教育",
      experience: "经验",
      skills: "技能",
      projects: "项目",
      contact: "联系"
    },
    hero: {
      greeting: "你好，我是",
      name: "穆罕默德·祖尔凡·安加迪普特拉",
      title: "信息工程学生",
      tagline: "精通软件开发、数据库编程和多媒体应用，热衷于将新兴技术应用于现实世界的解决方案。",
      downloadCV: "下载简历",
      contactMe: "联系我"
    },
    about: {
      title: "关于我",
      description: "信息学专业本科生，精通软件开发、数据库编程和多媒体应用。具有实验室助教和软件研发项目经验，热衷于将新兴技术应用于现实世界的解决方案。",
      location: "万隆，西爪哇 40283",
      email: "zulfanangga2908@gmail.com",
      phone: "+6285156927928",
      portfolio: "https://zulfan15.github.io/MZulfan"
    },
    education: {
      title: "教育",
      degree: "本科，信息学",
      university: "Institut Teknologi Nasional Bandung",
      gpa: "GPA: 3.46",
      location: "万隆，西爪哇",
      period: "2022年 - 至今"
    },
    experience: {
      title: "经验",
      jobs: [
        {
          title: "数据库编程实验室助教",
          company: "Institut Teknologi Nasional Bandung",
          period: "2024年9月 - 2025年1月",
          description: [
            "担任数据库概念入门和应用开发的讲师。",
            "指导学生使用Delphi7设计、实现和集成数据库到现实世界应用中。",
            "提供一对一指导，帮助学生解决编码和数据库问题。"
          ]
        },
        {
          title: "面向对象编程实验室助教",
          company: "Institut Teknologi Nasional Bandung",
          period: "2025年3月 - 2025年6月",
          description: [
            "担任面向对象编程基础（Java）讲师。",
            "协助学生在软件开发项目中应用面向对象编程原理。",
            "指导学生团队开发小到中等规模的应用程序，采用最佳编码实践。"
          ]
        },
        {
          title: "计算机网络实验室助教",
          company: "Institut Teknologi Nasional Bandung",
          period: "2025年3月 - 2025年6月",
          description: [
            "担任计算机网络基础和配置讲师。",
            "指导学生设置局域网、配置路由器/交换机和实施TCP/IP协议。",
            "支持学生进行网络故障排除、安全基础和客户端-服务器项目任务。"
          ]
        },
        {
          title: "软件开发实习生",
          company: "PT Dwi Purwa Teknologi",
          period: "2025年7月 - 2025年9月",
          description: [
            "协助客户项目数字解决方案的研发工作。",
            "为正在进行的软件应用程序添加新功能做出贡献。",
            "与资深开发人员合作测试、调试和改进应用程序性能。",
            "在数字咨询环境中获得软件开发生命周期的实践经验。"
          ]
        }
      ]
    },
    skills: {
      title: "技能与专长",
      categories: {
        programming: "编程与开发",
        database: "数据库与网络",
        tools: "工具与软件",
        certifications: "认证",
        languages: "语言"
      },
      items: {
        programming: ["Java", "Python", "C", "JavaScript", "Node.js", "Flutter", "Delphi 7"],
        database: ["MySQL", "Huawei Firewall", "MikroTik"],
        tools: ["Visual Studio Code", "IntelliJ IDEA", "NetBeans", "Android Studio", "Arduino IDE", "eNSP", "Adobe Animate", "Adobe Premiere", "Canva", "Figma", "Power BI", "Katalon Studio", "Selenium", "Windows", "Red Hat", "Ubuntu"],
        certifications: ["Huawei Certified ICT Associate - Security (HCIA-Security V4.0)"],
        languages: ["印尼语 - 母语", "英语 - 中级"]
      }
    },
    projects: {
      title: "项目",
      items: [
        {
          title: "遥控坦克",
          description: "基于物联网的原型，集成ESP32、传感器和电机驱动器，配备Flutter移动控制和Web仪表板。",
          period: "2024年9月 - 2025年1月",
          technologies: ["ESP32", "Flutter", "IoT", "Web仪表板"]
        },
        {
          title: "使用InceptionV3的深度学习图像分类",
          description: "开发和评估使用InceptionV3进行图像分类任务的深度学习模型。在数据集上应用迁移学习和微调技术。",
          period: "2024年3月 - 2025年6月",
          technologies: ["Python", "InceptionV3", "深度学习", "迁移学习"]
        }
      ]
    },
    contact: {
      title: "联系我",
      subtitle: "我总是乐于讨论新机会和有趣的项目。",
      form: {
        name: "您的姓名",
        email: "您的邮箱",
        message: "您的消息",
        send: "发送消息"
      }
    },
    common: {
      darkMode: "深色模式",
      lightMode: "浅色模式",
      language: "语言"
    }
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Acerca de",
      education: "Educación",
      experience: "Experiencia",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto"
    },
    hero: {
      greeting: "Hola, soy",
      name: "Muhammad Zulfan Anggadhiputra",
      title: "Estudiante de Ingeniería Informática",
      tagline: "Experto en desarrollo de software, programación de bases de datos y aplicaciones multimedia con pasión por aplicar tecnologías emergentes a soluciones del mundo real.",
      downloadCV: "Descargar CV",
      contactMe: "Contáctame"
    },
    about: {
      title: "Acerca de Mí",
      description: "Estudiante de pregrado en informática experto en desarrollo de software, programación de bases de datos y aplicaciones multimedia. Experiencia en asistencia de laboratorio y proyectos de I+D de software, con pasión por aplicar tecnologías emergentes a soluciones del mundo real.",
      location: "Bandung, Jawa Barat 40283",
      email: "zulfanangga2908@gmail.com",
      phone: "+6285156927928",
      portfolio: "https://zulfan15.github.io/MZulfan"
    },
    education: {
      title: "Educación",
      degree: "Pregrado, Informática",
      university: "Institut Teknologi Nasional Bandung",
      gpa: "GPA: 3.46",
      location: "Bandung, Jawa Barat",
      period: "2022 - Presente"
    },
    experience: {
      title: "Experiencia",
      jobs: [
        {
          title: "Asistente de Laboratorio de Programación de Base de Datos",
          company: "Institut Teknologi Nasional Bandung",
          period: "Sep 2024 - Ene 2025",
          description: [
            "Sirvió como instructor para conceptos de base de datos introductorios y desarrollo de aplicaciones.",
            "Guió a los estudiantes para diseñar, implementar e integrar bases de datos en aplicaciones del mundo real usando Delphi7.",
            "Proporcionó mentoría individual para ayudar a los estudiantes a solucionar problemas de codificación y base de datos."
          ]
        },
        {
          title: "Asistente de Laboratorio de Programación Orientada a Objetos",
          company: "Institut Teknologi Nasional Bandung",
          period: "Mar 2025 - Jun 2025",
          description: [
            "Sirvió como instructor para fundamentos de programación orientada a objetos (Java).",
            "Asistió a los estudiantes en la aplicación de principios POO en proyectos de desarrollo de software.",
            "Mentoró equipos de estudiantes para desarrollar aplicaciones de pequeña a mediana escala con las mejores prácticas de codificación."
          ]
        },
        {
          title: "Asistente de Laboratorio de Redes de Computadoras",
          company: "Institut Teknologi Nasional Bandung",
          period: "Mar 2025 - Jun 2025",
          description: [
            "Sirvió como instructor para fundamentos de redes de computadoras y configuración.",
            "Guió a los estudiantes en la configuración de LAN, configuración de routers/switches e implementación de protocolos TCP/IP.",
            "Apoyó a los estudiantes en la resolución de problemas de red, fundamentos de seguridad y asignaciones de proyectos cliente-servidor."
          ]
        },
        {
          title: "Interno de Desarrollo de Software",
          company: "PT Dwi Purwa Teknologi",
          period: "Jul 2025 - Sep 2025",
          description: [
            "Asistió en investigación y desarrollo (I+D) de soluciones digitales para proyectos de clientes.",
            "Contribuyó a agregar nuevas características en una aplicación de software en progreso.",
            "Colaboró con desarrolladores senior para probar, depurar y mejorar el rendimiento de aplicaciones.",
            "Obtuvo experiencia práctica en el ciclo de vida del desarrollo de software dentro de un entorno de consultoría digital."
          ]
        }
      ]
    },
    skills: {
      title: "Habilidades y Experiencia",
      categories: {
        programming: "Programación y Desarrollo",
        database: "Base de Datos y Redes",
        tools: "Herramientas y Software",
        certifications: "Certificaciones",
        languages: "Idiomas"
      },
      items: {
        programming: ["Java", "Python", "C", "JavaScript", "Node.js", "Flutter", "Delphi 7"],
        database: ["MySQL", "Huawei Firewall", "MikroTik"],
        tools: ["Visual Studio Code", "IntelliJ IDEA", "NetBeans", "Android Studio", "Arduino IDE", "eNSP", "Adobe Animate", "Adobe Premiere", "Canva", "Figma", "Power BI", "Katalon Studio", "Selenium", "Windows", "Red Hat", "Ubuntu"],
        certifications: ["Huawei Certified ICT Associate - Security (HCIA-Security V4.0)"],
        languages: ["Indonesio - Nativo", "Inglés - Intermedio"]
      }
    },
    projects: {
      title: "Proyectos",
      items: [
        {
          title: "Tanque de Control Remoto",
          description: "Prototipo basado en IoT que integra ESP32, sensores y controladores de motor con control móvil Flutter y panel web.",
          period: "Sep 2024 - Ene 2025",
          technologies: ["ESP32", "Flutter", "IoT", "Panel Web"]
        },
        {
          title: "Clasificación de Imágenes de Deep Learning con InceptionV3",
          description: "Desarrolló y evaluó modelos de deep learning usando InceptionV3 para tareas de clasificación de imágenes. Aplicó técnicas de aprendizaje por transferencia y ajuste fino en conjuntos de datos.",
          period: "Mar 2024 - Jun 2025",
          technologies: ["Python", "InceptionV3", "Deep Learning", "Transfer Learning"]
        }
      ]
    },
    contact: {
      title: "Ponerse en Contacto",
      subtitle: "Siempre estoy abierto a discutir nuevas oportunidades y proyectos interesantes.",
      form: {
        name: "Su Nombre",
        email: "Su Email",
        message: "Su Mensaje",
        send: "Enviar Mensaje"
      }
    },
    common: {
      darkMode: "Modo Oscuro",
      lightMode: "Modo Claro",
      language: "Idioma"
    }
  }
};

export const supportedLanguages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
];