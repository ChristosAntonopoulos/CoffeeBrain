import React, { createContext, useContext, useState, ReactNode } from 'react';

// Supported languages
type Language = 'el' | 'en';

// Translation dictionary
type Translations = Record<string, { el: string; en: string }>;

const translations: Translations = {
  contactUs: { el: 'Επικοινωνία', en: 'Contact Us' },
  contactDescription: {
    el: 'Θα χαρούμε να σας ακούσουμε. Επισκεφθείτε μας στα Φιλιατρά ή επικοινωνήστε μαζί μας για να μάθετε περισσότερα για το Coffee Brain και τη δέσμευσή μας για εξαιρετικές εμπειρίες καφέ.',
    en: `We'd love to hear from you. Visit us in Filiatra or get in touch to learn more about Coffee Brain and our commitment to exceptional coffee experiences.`
  },
  visit: { el: 'Επισκεφθείτε το Coffee Brain', en: 'Visit Coffee Brain' },
  address: { el: 'Διεύθυνση', en: 'Address' },
  addressText: { el: 'Φιλιατρά, Μεσσηνία\nΕλλάδα', en: 'Filiatra, Messinia\nGreece' },
  hours: { el: 'Ώρες Λειτουργίας', en: 'Opening Hours' },
  weekday: { el: 'Δευτέρα - Παρασκευή', en: 'Monday - Friday' },
  weekdayHours: { el: '7:00 π.μ. - 11:00 μ.μ.', en: '7:00 AM - 11:00 PM' },
  weekend: { el: 'Σάββατο - Κυριακή', en: 'Saturday - Sunday' },
  weekendHours: { el: '8:00 π.μ. - 11:00 μ.μ.', en: '8:00 AM - 11:00 PM' },
  contactInfo: { el: 'Στοιχεία Επικοινωνίας', en: 'Contact Info' },
  phone: { el: 'Τηλέφωνο', en: 'Phone' },
  email: { el: 'Email', en: 'Email' },
  followUs: { el: 'Ακολουθήστε μας', en: 'Follow Us' },
  facebook: { el: 'Facebook', en: 'Facebook' },
  instagram: { el: 'Instagram', en: 'Instagram' },
  findUs: { el: 'Βρείτε μας στα Φιλιατρά', en: 'Find Us in Filiatra' },
  findUsDesc: { el: 'Στην καρδιά της κεντρικής πλατείας των Φιλιατρών, το Coffee Brain είναι εύκολα προσβάσιμο και περιβάλλεται από τη γοητευτική ατμόσφαιρα αυτής της ιστορικής πόλης.', en: `Located in the heart of Filiatra's central square, Coffee Brain is easily accessible and surrounded by the charming atmosphere of this historic Greek town.` },
  ready: { el: 'Έτοιμοι να ζήσετε το Coffee Brain;', en: 'Ready to Experience Coffee Brain?' },
  readyDesc: { el: 'Ελάτε να ανακαλύψετε τι κάνει το καφέ μας ξεχωριστό. Ανυπομονούμε να σας εξυπηρετήσουμε!', en: `Come and discover what makes our coffee shop special. We're looking forward to serving you!` },
  viewMenu: { el: 'Δείτε το Μενού', en: 'View Our Menu' },
  seeGallery: { el: 'Δείτε τη Συλλογή', en: 'See Our Gallery' },
  home: { el: 'Αρχική', en: 'Home' },
  gallery: { el: 'Συλλογή', en: 'Gallery' },
  menu: { el: 'Μενού', en: 'Menu' },
  // Home page
  homeTitle: { el: 'Coffee Brain', en: 'Coffee Brain' },
  homeDesc: { el: 'Το αγαπημένο σας καφέ στα Φιλιατρά!', en: 'Your favorite coffee spot in Filiatra!' },
  welcomeTo: { el: 'Καλώς ήρθατε στο', en: 'Welcome to' },
  heroBrand: { el: 'Coffee Brain', en: 'Coffee Brain' },
  heroSubtitle: { el: 'Μια εκλεπτυσμένη εμπειρία καφετέριας στην καρδιά των Φιλιατρών', en: 'A refined coffeehouse experience in the heart of Filiatra' },
  heroDescription: { el: 'Ανακαλύψτε τον κομψό μας χώρο με γκρι και μαύρους τόνους και χρυσές λεπτομέρειες. Απολαύστε premium καφέ, αρτοσκευάσματα και ζεστή ελληνική φιλοξενία.', en: 'Discover our sleek interior with grey and black tones enhanced by gold accents. Enjoy premium coffee, artisanal pastries, and warm Greek hospitality.' },
  exploreGallery: { el: 'Δείτε τη Συλλογή', en: 'Explore Gallery' },
  whyChooseCoffeeBrain: { el: 'Γιατί να επιλέξετε το Coffee Brain', en: 'Why Choose Coffee Brain' },
  experienceDescription: { el: 'Ζήστε τον τέλειο συνδυασμό μοντέρνας κομψότητας και παραδοσιακής ελληνικής φιλοξενίας', en: 'Experience the perfect blend of modern elegance and traditional Greek hospitality' },
  premiumCoffee: { el: 'Premium Καφές', en: 'Premium Coffee' },
  premiumCoffeeDesc: { el: 'Από παραδοσιακό ελληνικό καφέ μέχρι εξειδικευμένα ροφήματα espresso, κάθε φλιτζάνι φτιάχνεται με πάθος και ακρίβεια.', en: 'From traditional Greek coffee to expertly crafted espresso drinks, every cup is made with passion and precision.' },
  elegantAtmosphere: { el: 'Κομψή Ατμόσφαιρα', en: 'Elegant Atmosphere' },
  elegantAtmosphereDesc: { el: 'Χαλαρώστε στον προσεγμένο μας χώρο με μοντέρνα διακόσμηση και πολυτελείς χρυσές λεπτομέρειες.', en: 'Relax in our thoughtfully designed space featuring sleek interiors with sophisticated color palettes and luxurious gold accents.' },
  freshPastries: { el: 'Φρέσκα Αρτοσκευάσματα', en: 'Fresh Pastries' },
  freshPastriesDesc: { el: 'Απολαύστε φρέσκα αρτοσκευάσματα, από κρουασάν μέχρι αυθεντικά ελληνικά γλυκά με τοπικά υλικά.', en: 'Indulge in our selection of fresh pastries, from flaky croissants to authentic Greek desserts made with local ingredients.' },
  visitUsInFiliatra: { el: 'Επισκεφθείτε μας στα Φιλιατρά', en: 'Visit Us in Filiatra' },
  locationDescription: { el: 'Στα Φιλιατρά, το Coffee Brain προσφέρει ένα μοντέρνο καταφύγιο για να απολαύσετε εξαιρετικό καφέ σε αυθεντική ελληνική ατμόσφαιρα.', en: 'Located in the charming town of Filiatra, Coffee Brain offers a modern sanctuary where you can enjoy exceptional coffee while soaking in the authentic Greek atmosphere.' },
  addressDetails: { el: 'Κεντρική Πλατεία, Φιλιατρά, Ελλάδα', en: 'Central Square, Filiatra, Greece' },
  hoursDetails: { el: 'Δευ-Κυρ: 7:00 π.μ. - 11:00 μ.μ.', en: 'Mon-Sun: 7:00 AM - 11:00 PM' },
  phoneDetails: { el: '+30 694 993 5364 / +30 27610 33040', en: '+30 694 993 5364 / +30 27610 33040' },
  getDirections: { el: 'Οδηγίες Πρόσβασης', en: 'Get Directions' },
  readyForCoffeeExperience: { el: 'Έτοιμοι για μια εμπειρία καφέ;', en: 'Ready for a Coffee Experience?' },
  joinUsDescription: { el: 'Ελάτε στο Coffee Brain και ανακαλύψτε γιατί είμαστε ο αγαπημένος προορισμός καφέ στα Φιλιατρά.', en: `Join us at Coffee Brain and discover why we're Filiatra's favorite coffee destination.` },
  exploreMenu: { el: 'Δείτε το Μενού', en: 'Explore Menu' },
  viewGallery: { el: 'Δείτε τη Συλλογή', en: 'View Gallery' },
  // Menu page
  coffeeCat: { el: '☕ Καφές', en: '☕ Coffee' },
  coldDrinksCat: { el: '🧊 Κρύα Ροφήματα', en: '🧊 Cold Drinks' },
  pastriesCat: { el: '🥐 Αρτοσκευάσματα', en: '🥐 Pastries' },
  snacksCat: { el: '🥪 Σνακ', en: '🥪 Snacks' },
  loadingMenu: { el: 'Φόρτωση μενού...', en: 'Loading menu...' },
  orderReady: { el: 'Έτοιμοι να παραγγείλετε;', en: 'Ready to Order?' },
  orderDesc: { el: 'Επισκεφθείτε μας για να απολαύσετε αυτές τις γευστικές επιλογές από κοντά. Το φιλικό μας προσωπικό είναι έτοιμο να σας εξυπηρετήσει.', en: 'Visit us at Coffee Brain to experience these delicious offerings in person. Our friendly staff is ready to craft your perfect coffee moment.' },
  visitUsToday: { el: 'Επισκεφθείτε μας σήμερα', en: 'Visit Us Today' },
  seeOurSpace: { el: 'Δείτε τον χώρο μας', en: 'See Our Space' },
  // Gallery page
  loadingGallery: { el: 'Φόρτωση συλλογής...', en: 'Loading gallery...' },
  galleryDesc: { el: 'Δείτε το Coffee Brain μέσα από φωτογραφίες. Εξερευνήστε τον κομψό μας χώρο, τις δημιουργίες καφέ και τη ζεστή ατμόσφαιρα που μας κάνει ξεχωριστούς.', en: 'Take a visual journey through Coffee Brain. Explore our elegant interior, artisanal coffee creations, and the warm atmosphere that makes us special.' },
  clickToView: { el: 'Κάντε κλικ για μεγέθυνση', en: 'Click to view' },
};

interface I18nContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations) => string;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('el');
  const t = (key: keyof typeof translations) => translations[key][language];
  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used within I18nProvider');
  return context;
}; 