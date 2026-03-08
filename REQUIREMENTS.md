# Website Requirements Document: Satvik Savour Jain Food

## 1. Project Overview
* **Brand Name:** Satvik Savour Jain Food
* **Tagline:** Bangalore’s Only Dedicated 100% Pure Jain Cloud Kitchen.
* **Website Goal:** Create a high-authority online presence to capture search traffic and convert visitors into WhatsApp leads for individual, corporate, and event orders. 
* **Primary Conversion Goal:** Open WhatsApp Chat for ordering or inquiries.
* **Conversion Channels:** [WhatsApp Direct](https://wa.me/917259792300) (Primary), [Swiggy](https://www.swiggy.com/city/bangalore/satvik-savour-ll-jain-food-munnekollal-rest915625), [Zomato](https://www.zomato.com/bangalore/satvik-savour-jain-food-marathahalli-bangalore/order).
* **Core Services:** Individual Orders, Corporate Meal Boxes, Event Catering (House Parties/Pujas), and Daily Tiffins.
* **Special Event Focus:** Dynamic sections for Navratri, Paryushan, and other Fasting (Vrat) menus.

## 2. Brand Identity & Design Vibe
* **Inspiration:** Rethink Foods (Visual cleanliness), Satopradhan.com (Purity & Minimalism), Sattviko.com (Modern Satvik Branding).
* **Visual Style:** Artisanal, Pure, Calm, and Earthy. It should feel like "Ancient Wisdom meets Modern Convenience."
* **Color Palette (Final):**
    * **Deep Forest Green:** `#1B3022` (Primary Brand Color)
    * **Warm Cream:** `#F9F7F2` (Background Color)
    * **Accent Gold:** `#C5A059` (Button/Highlight Color)
    * **Text Charcoal:** `#2D2D2D` (Body Text)
* **Typography:**
    * **Headlines:** `Playfair Display` (Serif, Bold) - Google Font
    * **Body Text:** `Montserrat` (Sans-Serif) - Google Font

## 3. Core USPs (Unique Selling Propositions) to Highlight
* **The ONLY 100% Pure Jain Provider in Bangalore:** Not just "Jain options," but a dedicated Jain kitchen.
* **Strict Jain Adherence:** Zero exceptions. NO Potato, Onion, Garlic, Carrot, Beetroot, Radish, Mushroom, or Cauliflower.
* **High-Prana Food:** We emphasize that Satvik food isn't just a diet; it's food that enhances "Prana" (Life Force) for better mental and physical clarity.
* **Versatility:** Breaking the myth that Jain food is limited. We offer everything from Italian to Chinese—all zero-root.

## 4. Website Structure (Single Page Application / Landing Page)
The website will be a single, long-scrolling landing page to keep the user journey focused.

### Section A: Header & Navigation
* Fixed top navigation bar.
* Logo on the left.
* Links: Our Story, Health Benefits, Menu, Services, Contact.
5.  **Section Hierarchy (Reordered):** 
    1. Hero
    2. Services (Lead Gen)
    3. Trust Bar (Guarantee)
    4. Philosophy
    5. Benefits
    6. Menu Teaser
    7. Specials (Seasonal)
    8. Footer
6.  **Contact Strategy:**
    *   **917259792300:** Primarily for automated ordering (Gupshup).
    *   **919875015457:** Primarily for manual inquiries and catering quotes.
* Prominent CTA Button: "ORDER ON WHATSAPP" (Links to WhatsApp chat with predefined message).

### Section B: Hero Section (The Hook)
* High-quality, mouth-watering background image or video of a signature dish (e.g., Premium Jain Thali).
* Catchy Headline (e.g., "India's Purest Jain Kitchen in Namma Bengaluru.")
* Sub-headline emphasizing 100% Jain multi-cuisine with 0% root vegetables.
* CTA Button: "ORDER NOW ON WHATSAPP" (Large, prominent).

### Section C: Trust & Delivery Partners Bar
* "Order through your favorite apps:"
* Logos of delivery partners: Swiggy, Zomato, Ownly.

### Section D: The "What We Avoid" & "Satvik Health Benefits" Section
* **What We Avoid:** A clear, modern listing or visual icons showing what is NOT in the food (No Onion, Garlic, Potato, Carrot, Beetroot, Radish, Mushroom, Cauliflower).
* **Health Benefits:** Clean, visually appealing cards explaining why Satvik food is great for everyone:
    * *Better Digestion:* Light on the stomach, no bloating.
    * *Mental Clarity:* Pure ingredients lead to a calm, focused mind.
    * *High Energy:* Fresh, natural foods retain prana (life force).

### Section E: Menu Highlights
* *Highlighting the bestsellers.*
* **Grid Layout** featuring top categories:
    1. **Signature Thalis:** (Premium Jain Thali, Dal Bati Churma)
    2. **North Indian Richness:** (Dal Makhani, Paneer Butter Masala)
    3. **Global Cuisine (Jain):** (Garden Fresh Pizza, Hakka Noodles)
    4. **Starters & Quick Bites:** (Kurkure Paneer, Vada Pav)
* A button below the grid reading: "VIEW FULL MENU ON SWIGGY" to show the complete 139+ item catalog.

    * Event Packed Meal Boxes
* **Daily Tiffin Service:** "Craving home-style meals? Avail our daily tiffin service via [Pakaoo](https://pakaoo.com/)."

### Section G: "Our Story" / Philosophy
* Explaining the *why* behind Satvik Savour.
* Focus on purity, quality ingredients, and the challenge of mastering multi-cuisine without root vegetables/onion/garlic.

### Section H: Footer & Contact
* Address: Site No 174, Manjunatha Layout, Munnekolala, Marathahalli, Bengaluru.
* Email & Phone number.
* Links to social media (Instagram, Facebook).
* Copyright info.

## 5. Technical Architecture & Stack

### Core Frameworks
*   **Framework:** Angular 19+ (Standalone Component Architecture).
*   **Styling:** Tailwind CSS v3.4 (with PostCSS integration).
*   **Pre-processor:** SCSS (for global and component-specific styles).
*   **Icons:** Font Awesome 6.4 (CDN loaded).
*   **Fonts:** Google Fonts (Montserrat & Playfair Display).

### Component Pattern
To ensure maintainability by experienced developers, the project follows a strict three-file pattern per component:
*   **Logic:** `[name].ts` (Standalone component, imports logic).
*   **Structure:** `[name].html` (Tailwind-based semantic HTML).
*   **Style:** `[name].scss` (Scoped component styles).

### Project Layout
*   `src/app/components/`: Modularized business sections (Hero, Services, Menu, etc.).
*   `src/styles.scss`: Central theme configuration, Tailwind directives, and global keyframe animations.
*   `public/assets/images/`: Source directory for all brand photography and logos.
*   `index.html`: Optimized with SEO meta tags, smooth scrolling, and anti-aliasing.

### SEO & Performance
*   **Bundle Size:** Optimized under 150KB for initial load.
*   **SEO:** Dedicated meta tags for Jain food searches in Bangalore/Marathahalli.
*   **User Experience:** Smooth scroll behavior, responsive grid layouts, and curated micro-animations.
