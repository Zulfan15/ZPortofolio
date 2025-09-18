# Muhammad Zulfan Anggadhiputra - Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring multi-language support, dark/light mode toggle, and smooth animations.

## 🌟 Features

- **Multi-language Support**: Available in 7 languages (English, German, French, Japanese, Korean, Chinese, Spanish)
- **Dark/Light Mode**: Toggle between themes with persistent storage
- **Responsive Design**: Mobile-first design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and TailwindCSS

## 🚀 Tech Stack

- **Frontend**: Next.js 15.5.3 with TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes for dark mode support
- **State Management**: React Context API

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navigation.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── SkillsSection.tsx
│   ├── contexts/
│   │   └── LanguageContext.tsx
│   ├── hooks/
│   │   └── useTheme.ts
│   └── lib/
│       └── translations.ts
├── public/
│   ├── assets/
│   │   └── CV.pdf
│   └── images/
│       ├── Background Home.png
│       ├── profile.jpg
│       └── Vmachine.png
└── package.json
```

## 🛠️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment

### GitHub Pages Deployment

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:
   ```json
   {
     "scripts": {
       "build": "next build",
       "export": "next export",
       "deploy": "npm run build && npm run export && gh-pages -d out"
     }
   }
   ```

3. **Configure next.config.js**:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   
   module.exports = nextConfig
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

### Vercel Deployment (Recommended)

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically with each push

## 📧 Contact Information

- **Email**: MuhammadZAngg@gmail.com
- **WhatsApp**: +62 813-2297-6071
- **GitHub**: [muhammadZulfanA](https://github.com/muhammadZulfanA)
- **LinkedIn**: [muhammad-zulfan-anggadhiputra](https://linkedin.com/in/muhammad-zulfan-anggadhiputra)
- **Location**: Bandung, West Java, Indonesia

## 🏫 Education

- **Institut Teknologi Nasional Bandung**
- **Informatics Engineering** (2022 - 2026)
- **GPA**: 3.46/4.00

## 💼 Experience

- **Database Laboratory Assistant** (Mar 2025 - Jun 2025)
- **Object-Oriented Programming Laboratory Assistant** (Mar 2025 - Jun 2025)
- **Computer Network Laboratory Assistant** (Mar 2025 - Jun 2025)
- **Software Development Intern at PT Dwi Purwa Teknologi** (Jul 2025 - Sep 2025)

## 🛠️ Skills

### Programming & Development
- Java, Python, C, JavaScript, Node.js, Flutter, Delphi 7

### Database & Network
- MySQL, Huawei Firewall, MikroTik

### Tools & Software
- Visual Studio Code, IntelliJ IDEA, NetBeans, Android Studio
- Adobe Creative Suite, Figma, Power BI

### Certifications
- Huawei Certified ICT Associate - Security (HCIA-Security V4.0)

### Languages
- Indonesian (Native)
- English (Advanced)

## 🚀 Projects

### 1. Remote Control Tank (Sep 2024 - Jan 2025)
IoT-based prototype with ESP32, sensors, and motor drivers with Flutter mobile control and web dashboard.
- **Technologies**: ESP32, Flutter, IoT, Web Dashboard

### 2. Deep Learning Image Classification with InceptionV3 (Mar 2024 - Jun 2025)
Development and evaluation of deep learning models using InceptionV3 for image classification tasks.
- **Technologies**: Python, InceptionV3, Deep Learning, Transfer Learning

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ by Muhammad Zulfan Anggadhiputra using Next.js & TailwindCSS
