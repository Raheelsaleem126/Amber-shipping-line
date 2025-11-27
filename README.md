# ASL - Group Of Shipping Line

A modern, responsive website for Amber Shipping Line, an NVOCC (Non-Vessel Operating Common Carrier) company specializing in container trading, freight forwarding, and logistics services.

## 🚢 About

Amber Shipping Line is a leading NVOCC company providing comprehensive shipping and logistics solutions including:
- Dry Container Services
- OT Container Services
- Freight Forwarding
- NVOCC Services
- Container Trading
- Afghan Transit Services

## ✨ Features

- **Responsive Design**: Fully responsive website that works seamlessly on all devices
- **Service Pages**: Detailed service pages with dynamic routing
- **Team Section**: Showcase of company team members
- **Contact Forms**: Integrated contact and quote request forms
- **WhatsApp Integration**: Direct WhatsApp contact links throughout the site
- **Service Tracking**: Track & Trace functionality for shipments
- **Modern UI**: Clean and professional design with smooth animations

## 🛠️ Tech Stack

- **Framework**: Next.js 15.0.3 (App Router)
- **Language**: TypeScript
- **Styling**: SCSS/SASS, Bootstrap 5.3.3
- **Animations**: AOS (Animate On Scroll)
- **Forms**: React Hook Form with Yup validation
- **Email**: EmailJS integration
- **Icons**: Font Awesome, Flaticon
- **Other Libraries**:
  - Swiper (Carousels/Sliders)
  - React CountUp (Number animations)
  - React Intersection Observer
  - React Toastify (Notifications)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Amber-shipping-line
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
Amber-shipping-line/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── page.tsx            # Homepage
│   │   ├── about/              # About page
│   │   ├── services/           # Services listing
│   │   ├── services-details/    # Dynamic service detail pages
│   │   ├── team/               # Team page
│   │   ├── contact/             # Contact page
│   │   └── how-it-work/         # How it works page
│   ├── components/             # React components
│   │   ├── homes/              # Homepage components
│   │   ├── pages/               # Page-specific components
│   │   ├── common/              # Shared components
│   │   └── form/               # Form components
│   ├── data/                   # Data files
│   │   ├── ServiceData.ts      # Service information
│   │   ├── TeamData.ts        # Team member data
│   │   └── WorkData.tsx       # Process/workflow data
│   ├── layouts/                # Layout components
│   │   ├── headers/            # Header components
│   │   └── footers/            # Footer components
│   ├── hooks/                  # Custom React hooks
│   └── styles/                 # Global styles
├── public/                     # Static assets
│   └── assets/                 # Images, fonts, icons
└── package.json                # Dependencies
```

## 🎯 Available Services

1. **Dry Container** - 20' and 40' dry containers for general cargo
2. **OT Container** - Open-top containers for oversized cargo
3. **Freight Forwarding** - Sea and land freight forwarding services
4. **NVOCC Services** - Slot booking, space management, and documentation
5. **Container Trading** - Buy, sell, or lease containers
6. **Afghan Transit** - Specialized Afghan transit services

## 👥 Team

- **Ammar Imtiaz** - Trading Executive
- **Ahmed** - Inventory Manager
- **Saif** - Pricing Head
- **Daniyal** - Finance Executive
- **Masood** - Support Executive
- **Sharukh** - Booking and Docs Head
- **Ibarahim** - EQC Controller
- **Bilal** - EQC Controller
- **Taha** - Finance Executive
- **Sufiyan** - Inventory Handler

## 📞 Contact Information

- **Address**: Tariq Road Dulara Building, Karachi, Pakistan
- **Phone**: +92 343 4613799
- **Email**: bdm@as-shippingline.com
- **WhatsApp**: [923434613799](https://wa.me/923434613799?text=Hello%20I%20have%20query!)
- **Working Hours**: Mon – Fri: 9:30 am – 8 pm, Sunday|Saturday: CLOSED

## 🚀 Build & Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Environment Variables

If you need to configure EmailJS or other services, create a `.env.local` file:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For any changes or updates, please contact the development team.

## 📧 Support

For support, email bdm@as-shippingline.com or contact via WhatsApp.

---

**Built with ❤️ for Amber Shipping Line**
