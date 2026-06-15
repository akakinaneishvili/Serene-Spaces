import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  EN: {
    translation: {
      home: "Home",
      shop: "Shop",
      contact: "Contact",
      register: "Register",
      login: "Log In",
      logout: "Log Out",

      allCategories: "All Category",
      addToCart: "Add to Cart",

      personal_info: "Personal Information",
      firstname: "First Name",
      lastname: "Last Name",
      email: "Email Address",
      phone: "Phone Number",
      address: "Delivery Address",
      password: "Password",

      home_title: "We Craft Your Dream Home",
      home_desc:
        "Discover furniture and interior solutions where timeless heritage meets slick modernity, tailored specifically for your peace of mind.",
      bestsellers: "Our Bestsellers",
      explore_category: "Explore by Category",
      sort_by: "Sort by",
      sort_price: "Price",
      sort_low_high: "Price: Low to High",
      sort_high_low: "Price: High to Low",
      inspiration_title: "Interior Inspiration",
      about_title: "About Us",
      about_desc:
        "At Serene Spaces, we believe that your home is a reflection of your personality and style. Established with a passion for design and an eye for detail, we specialize in crafting exquisite furniture and providing bespoke interior solutions that transform spaces into elegant, comfortable, and functional homes.",
      collections_title: "Our Collections",
      collections_desc:
        "Discover thoughtfully curated furniture pieces that transform your living spaces into sanctuaries of comfort and timeless elegance",
      search_placeholder: "Search modern furniture...",
      cart_title: "Your Shopping Cart",
      cart_empty: "Your cart is currently empty.",
      order_summary: "Order Summary",
      subtotal: "Subtotal",
      total: "Total",
      place_order: "Place Order",
      login_to_order: "Log In to Place Order",
      order_success: "Order Placed!",

      nav_home: "Home",
      nav_collections: "Collections",
      nav_shopping: "Shopping",
      nav_about: "About Us",
      nav_register: "Register",
      nav_login: "Log In",
      about_hero_sub: "Where Heritage Meets Modernity",
      about_hero_desc:
        "Founded in 1987, Hartmann has become synonymous with luxury furniture that stands the test of time. We combine Old World craftsmanship with contemporary design sensibilities to create pieces that elevate any space.",
      story_sub: "Our Story",
      story_title: "A Legacy Built on Passion",
      story_p1:
        "For nearly four decades, we have been dedicated to the art of creating furniture that transcends trends and embraces timeless elegance. Each piece is a testament to our unwavering commitment to craftsmanship and design excellence.",
      story_p2:
        "Our journey began in a small workshop in the heart of Copenhagen, where passion met precision. What started as a two-person operation has grown into a globally recognized brand, yet we've never lost sight of our roots.",
      story_p3:
        "Today, we continue that legacy, hand-selecting premium materials and employing traditional techniques alongside modern innovation to create pieces that tell a story—your story.",
      explore_btn: "Explore Our Collection",
      journey_title: "Our Journey",
      journey_sub: "Milestones",
      year_1987_title: "The Beginning",
      year_1987_desc:
        "Michael Hartmann opens a small furniture workshop in Copenhagen with a vision to create timeless pieces.",
      year_1995_title: "First Flagship Store",
      year_1995_desc:
        "Expanding beyond the workshop, we opened our first retail showroom in the heart of Copenhagen, attracting international design critics.",
      year_2008_title: "Going Global & Sustainable",
      year_2008_desc:
        "We launched our global shipping and made a strict commitment to using 100% certified sustainable wood and eco-friendly materials.",
      year_2018_title: "Digital Evolution",
      year_2018_desc:
        "Introduction of our interactive online studio, allowing customers worldwide to customize their furniture before ordering.",
      year_2026_title: "Present Day: The Next Generation",
      year_2026_desc:
        "Celebrating nearly four decades of minimalist craft, blending traditional Scandinavian techniques with modern smart-home integration.",
      values_sub: "CORE VALUES",
      values_title: "Our Philosophy",
      values_desc: "Three principles guide everything we create",
      val1_title: "Quality Materials",
      val1_desc:
        "We source only the finest materials and employ master craftsmen who understand that every detail matters. Our rigorous standards ensure each piece meets the highest benchmarks of excellence.",
      val2_title: "Timeless Design",
      val2_desc:
        "We believe in furniture that outlasts trends. Our designs blend rich Scandinavian minimalism with functional elegance, creating spaces you will love for decades.",
      val3_title: "Sustainability",
      val3_desc:
        "Responsibility is at our core. We partner exclusively with certified sustainable forests and use eco-friendly finishes, protecting nature while honoring your home.",
      footer_rights: "All rights reserved.",

      login_welcome: "Welcome Back",
      login_email_label: "Email Address",
      login_email_placeholder: "example@gmail.com",
      login_password_label: "Enter the password",
      login_btn: "LOG IN",

      user_loading: "Loading...",
      user_personal_info: "Personal Information",
      user_firstname: "First Name",
      user_lastname: "Last Name",
      user_email: "Email Address",
      user_phone: "Phone Number",
      user_address: "Delivery Address",
      user_security: "Security",
      user_password: "Password",
      user_account_overview: "Account Overview",
      user_status_label: "Account Status",
      user_status_active: "Active",
      user_reg_date_label: "Registration Date",
      user_reg_date: "June 2026",
      user_recent_orders: "Recent Orders",
      user_no_orders: "You haven't placed any orders yet.",
    },
  },
  KA: {
    translation: {
      home: "მთავარი",
      shop: "მაღაზია",
      contact: "კონტაქტი",
      Register: "რეგისტრაცია",
      LogIn: "შესვლა",
      LogOut: "გასვლა",
      allCategories: "ყველა კატეგორია",
      addToCart: "კალათაში დამატება",

      personal_info: "პირადი ინფორმაცია",
      firstname: "სახელი",
      lastname: "გვარი",
      email: "ელ. ფოსტა",
      phone: "ტელეფონის ნომერი",
      address: "მიწოდების მისამართი",
      password: "პაროლი",

      home_title: "ჩვენ ვქმნით თქვენს ოცნების სახლს",
      home_desc:
        "აღმოაჩინეთ ავეჯი და ინტერიერის გადაწყვეტილებები, სადაც მარადიული მემკვიდრეობა ხვდება დახვეწილ თანამედროვეობას, სპეციალურად თქვენი სიმშვიდისთვის შექმნილი.",
      bestsellers: "ჩვენი ბესტსელერები",
      explore_category: "აღმოაჩინე კატეგორიის მიხედვით",
      sort_by: "სორტირება",
      sort_price: "ფასი",
      sort_low_high: "ფასი: ზრდადობით",
      sort_high_low: "ფასი: კლებადობით",
      inspiration_title: "ინტერიერის შთაგონება",
      about_title: "ჩვენს შესახებ",
      about_desc:
        "Serene Spaces-ში გვჯერა, რომ თქვენი სახლი თქვენი პიროვნებისა და სტილის ანარეკლია. დიზაინისადმი ვნებითა და დეტალებისადმი ყურადღებით დაარსებული, ჩვენ სპეციალიზებული ვართ დახვეწილი ავეჯის დამზადებასა და ინტერიერის ინდივიდუალური გადაწყვეტილებების შექმნაში, რომლებიც სივრცეებს ელეგანტურ, კომფორტულ და ფუნქციურ სახლებად აქცევს.",
      collections_title: "ჩვენი კოლექციები",
      collections_desc:
        "აღმოაჩინეთ გულდასმით შერჩეული ავეჯი, რომელიც თქვენს საცხოვრებელ სივრცეს კომფორტისა და მარადიული ელეგანტურობის სავანედ აქცევს",
      search_placeholder: "მოძებნე თანამედროვე ავეჯი...",
      cart_title: "თქვენი კალათა",
      cart_empty: "თქვენი კალათა ამჟამად ცარიელია.",
      order_summary: "შეკვეთის შეჯამება",
      subtotal: "ჯამი",
      total: "სულ ჯამი",
      place_order: "შეკვეთის გაფორმება",
      login_to_order: "შესვლა შეკვეთისთვის",
      order_success: "შეკვეთა მიღებულია!",

      nav_home: "მთავარი",
      nav_collections: "კოლექციები",
      nav_shopping: "შოპინგი",
      nav_about: "ჩვენ შესახებ",
      nav_register: "რეგისტრაცია",
      nav_login: "შესვლა",
      about_hero_sub: "სადაც მემკვიდრეობა ხვდება თანამედროვეობას",
      about_hero_desc:
        "დაარსებული 1987 წელს, Hartmann გახდა ფუფუნების ავეჯის სინონიმი, რომელიც უძლებს დროს. ჩვენ ვაერთიანებთ ძველი სამყაროს ოსტატობას თანამედროვე დიზაინთან, რათა შევქმნათ სივრცეები, რომლებიც ნებისმიერ გარემოს აამაღლებს.",
      story_sub: "ჩვენი ისტორია",
      story_title: "ვნებაზე აგებული მემკვიდრეობა",
      story_p1:
        "თითქმის ოთხი ათწლეულის განმავლობაში, ჩვენ თავს ვუძღვნით ავეჯის შექმნის ხელოვნებას, რომელიც სცილდება ტენდენციებს და მოიცავს მარადიულ ელეგანტურობას. თითოეული ნამუშევარი არის ჩვენი ურყევი ერთგულების დასტური ოსტატობისა და დიზაინის სრულყოფილებისადმი.",
      story_p2:
        "ჩვენი მოგზაურობა დაიწყო კოპენჰაგენის გულში, პატარა სახელოსნოში, სადაც ვნება შეხვდა სიზუსტეს. რაც დაიწყო როგორც ორკაციანი საწარმო, გადაიზარდა გლობალურად აღიარებულ ბრენდად, თუმცა ჩვენ არასოდეს დაგვიკარგავს კავშირი ჩვენს ფესვებთან.",
      story_p3:
        "დღეს ჩვენ ვაგრძელებთ ამ მემკვიდრეობას, სათუთად ვარჩევთ პრემიუმ მასალებს და ვიყენებთ ტრადიციულ ტექნიკას თანამედროვე ინოვაციებთან ერთად, რათა შევქმნათ ნივთები, რომლებიც ყვებიან ისტორიას — თქვენს ისტორიას.",
      explore_btn: "აღმოაჩინე ჩვენი კოლექცია",
      journey_title: "ჩვენი გზა",
      journey_sub: "მნიშვნელოვანი ეტაპები",
      year_1987_title: "დასაწყისი",
      year_1987_desc:
        "მიხაელ ჰარტმანმა კოპენჰაგენში გახსნა ავეჯის პატარა სახელოსნო მარადიული ნივთების შექმნის ხედვით.",
      year_1995_title: "პირველი ფლაგმანური მაღაზია",
      year_1995_desc:
        "სახელოსნოს ფარგლებს გარეთ გაფართოებით, ჩვენ გავხსენით ჩვენი პირველი შოურუმი კოპენჰაგენის გულში, რომელმაც საერთაშორისო დიზაინის კრიტიკოსების ყურადღება მიიპყრო.",
      year_2008_title: "გლობალური და მდგრადი",
      year_2008_desc:
        "ჩვენ დავიწყეთ საერთაშორისო მიწოდება და ავიღეთ მკაცრი ვალდებულება 100%-ით სერთიფიცირებული მდგრადი ხისა და ეკომეგობრული მასალების გამოყენებაზე.",
      year_2018_title: "ციფრული ევოლუცია",
      year_2018_desc:
        "წარვადგინეთ ჩვენი ინტერაქტიული ონლაინ სტუდია, რომელიც მომხმარებლებს მთელ მსოფლიოში აძლევს საშუალებას მოახდინონ ავეჯის პერსონალიზაცია შეკვეთამდე.",
      year_2026_title: "დღევანდელი დღე: მომავალი თაობა",
      year_2026_desc:
        "აღვნიშნავთ მინიმალისტური ხელობის თითქმის ოთხ ათწლეულს, სადაც ტრადიციული სკანდინავიური ტექნიკა ერწყმის თანამედროვე ჭკვიანი სახლის სისტემებს.",
      values_sub: "მთავარი ღირებულებები",
      values_title: "ჩვენი ფილოსოფია",
      values_desc:
        "სამი პრინციპი, რომელიც ხელმძღვანელობს ყველაფერს, რასაც ვქმნით",
      val1_title: "ხარისხიანი მასალები",
      val1_desc:
        "ჩვენ ვიყენებთ მხოლოდ საუკეთესო მასალებს და ვასაქმებთ ოსტატებს, რომლებსაც ესმით, რომ თითოეულ დეტალს აქვს მნიშვნელობა. ჩვენი მკაცრი სტანდარტები უზრუნველყოფს თითოეული ნივთის სრულყოფილებას.",
      val2_title: "მარადიული დიზაინი",
      val2_desc:
        "ჩვენ გვჯერა ავეჯის, რომელიც უძლებს ტენდენციებს. ჩვენი დიზაინი აერთიანებს მდიდარ სკანდინავიურ მინიმალიზმს ფუნქციურ ელეგანტურობასთან, ქმნის სივრცეებს, რომლებიც ათწლეულების განმავლობაში გეყვარებათ.",
      val3_title: "მდგრადობა",
      val3_desc:
        "პასუხისმგებლობა ჩვენი საფუძველია. ჩვენ ვთანამშრომლობთ ექსკლუზიურად სერტიფიცირებულ მდგრად ტყეებთან და ვიყენებთ ეკოლოგიურად სუფთა მასალებს, რაც იცავს ბუნებას თქვენი სახლის პატივისცემასთან ერთად.",
      footer_rights: "ყველა უფლება დაცულია.",

      login_welcome: "კეთილი იყოს თქვენი დაბრუნება",
      login_email_label: "ელფოსტის მისამართი",
      login_email_placeholder: "example@gmail.com",
      login_password_label: "შეიყვანეთ პაროლი",
      login_btn: "შესვლა",

      user_loading: "იტვირთება...",
      user_personal_info: "პირადი ინფორმაცია",
      user_firstname: "სახელი",
      user_lastname: "გვარი",
      user_email: "ელფოსტის მისამართი",
      user_phone: "ტელეფონის ნომერი",
      user_address: "მიწოდების მისამართი",
      user_security: "უსაფრთხოება",
      user_password: "პაროლი",
      user_account_overview: "ანგარიშის მიმოხილვა",
      user_status_label: "ანგარიშის სტატუსი",
      user_status_active: "აქტიური",
      user_reg_date_label: "რეგისტრაციის თარიღი",
      user_reg_date: "ივნისი 2026",
      user_recent_orders: "ბოლო შეკვეთები",
      user_no_orders: "თქვენ ჯერ არ გაქვთ განთავსებული შეკვეთა.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "EN",
  fallbackLng: "EN",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
