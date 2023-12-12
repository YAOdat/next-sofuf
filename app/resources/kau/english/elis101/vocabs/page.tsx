import React from "react";
import Head from 'next/head'
import Script from 'next/script'

const vocabularyData = [
    {
        English: "Company",
        Arabic: "شركة",
        ExampleInEnglish: "I work for a company.",
        ExampleInArabic: "أعمل في شركة."
    },
    {
        English: "Gym",
        Arabic: "نادي رياضي",
        ExampleInEnglish: "I go to the gym to stay fit.",
        ExampleInArabic: "أذهب إلى النادي الرياضي للبقاء في حالة جيدة."
    },
    {
        English: "Good at",
        Arabic: "جيد في",
        ExampleInEnglish: "She is good at playing the piano.",
        ExampleInArabic: "هي جيدة في العزف على البيانو."
    },
    {
        English: "High school",
        Arabic: "المدرسة الثانوية",
        ExampleInEnglish: "I graduated from high school.",
        ExampleInArabic: "تخرجت من المدرسة الثانوية."
    },
    {
        English: "Engineer",
        Arabic: "مهندس",
        ExampleInEnglish: "He works as a software engineer.",
        ExampleInArabic: "يعمل كمهندس برمجيات."
    },
    {
        English: "Fit",
        Arabic: "رشيق",
        ExampleInEnglish: "Regular exercise keeps you fit.",
        ExampleInArabic: "الرياضة الدورية تحافظ على رشاقتك."
    },
    {
        English: "Hospital",
        Arabic: "مستشفى",
        ExampleInEnglish: "She works at the hospital.",
        ExampleInArabic: "تعمل في المستشفى."
    },
    {
        English: "Medicine",
        Arabic: "دواء",
        ExampleInEnglish: "I take medicine when I'm sick.",
        ExampleInArabic: "أتناول الدواء عندما أكون مريضًا."
    },
    {
        English: "Pilot",
        Arabic: "طيار",
        ExampleInEnglish: "The pilot flew the plane smoothly.",
        ExampleInArabic: "الطيار قاد الطائرة بسلاسة."
    },
    {
        English: "Pay",
        Arabic: "دفع",
        ExampleInEnglish: "I need to pay the bills.",
        ExampleInArabic: "أحتاج إلى دفع الفواتير."
    },
    {
        English: "Friendly",
        Arabic: "ودود",
        ExampleInEnglish: "She is friendly.",
        ExampleInArabic: "هي ودودة."
    },
    {
        English: "Nurse",
        Arabic: "ممرضة",
        ExampleInEnglish: "The nurse took care of the patient.",
        ExampleInArabic: "الراعية قامت برعاية المريض."
    },
    {
        English: "Healthy",
        Arabic: "صحي",
        ExampleInEnglish: "Eating fruits and vegetables is healthy.",
        ExampleInArabic: "تناول الفواكه والخضروات صحي."
    },
    {
        English: "Expensive",
        Arabic: "غالي",
        ExampleInEnglish: "This designer bag is expensive.",
        ExampleInArabic: "هذه الحقيبة المصممة غالية."
    },
    {
        English: "Buildings",
        Arabic: "مباني",
        ExampleInEnglish: "The city has tall buildings.",
        ExampleInArabic: "المدينة بها مباني طويلة."
    },
    {
        English: "Lift",
        Arabic: "مصعد",
        ExampleInEnglish: "Take the lift to the fourth floor.",
        ExampleInArabic: "اركب المصعد إلى الطابق الرابع."
    },
    {
        English: "Apartment",
        Arabic: "شقة",
        ExampleInEnglish: "I live in a small apartment.",
        ExampleInArabic: "أعيش في شقة صغيرة."
    },
    {
        English: "Cost",
        Arabic: "تكلفة",
        ExampleInEnglish: "The cost of living is high in the city.",
        ExampleInArabic: "تكلفة المعيشة مرتفعة في المدينة."
    },
    {
        English: "Cheap",
        Arabic: "رخيص",
        ExampleInEnglish: "This shirt is cheap and good quality.",
        ExampleInArabic: "هذا القميص رخيص وجودة جيدة."
    },
    {
        English: "Beautiful",
        Arabic: "جميل",
        ExampleInEnglish: "The sunset was beautiful.",
        ExampleInArabic: "كانت الغروب جميلة."
    },
    {
        English: "Modern",
        Arabic: "حديث",
        ExampleInEnglish: "The house has a modern design.",
        ExampleInArabic: "المنزل لديه تصميم حديث."
    },
    {
        English: "Traditional",
        Arabic: "تقليدي",
        ExampleInEnglish: "They celebrate with traditional customs.",
        ExampleInArabic: "يحتفلون بتقاليد تقليدية."
    },
    {
        English: "Ugly",
        Arabic: "قبيح",
        ExampleInEnglish: "That painting is ugly.",
        ExampleInArabic: "تلك اللوحة قبيحة."
    },
    {
        English: "Big",
        Arabic: "كبير",
        ExampleInEnglish: "The elephant is big.",
        ExampleInArabic: "الفيل كبير."
    },
    {
        English: "Tall",
        Arabic: "طويل",
        ExampleInEnglish: "The basketball player is tall.",
        ExampleInArabic: "لاعب كرة السلة طويل."
    },
    {
        English: "Short",
        Arabic: "قصير",
        ExampleInEnglish: "She is short compared to her friends.",
        ExampleInArabic: "إنها قصيرة مقارنة بأصدقائها."
    },
    {
        English: "Small",
        Arabic: "صغير",
        ExampleInEnglish: "The kitten is small and cute.",
        ExampleInArabic: "القطة الصغيرة وجميلة."
    },
    {
        English: "New",
        Arabic: "جديد",
        ExampleInEnglish: "I bought a new car.",
        ExampleInArabic: "اشتريت سيارة جديدة."
    },
    {
        English: "Old",
        Arabic: "قديم",
        ExampleInEnglish: "The book is old but valuable.",
        ExampleInArabic: "الكتاب قديم ولكنه قيم."
    },
    {
        English: "Roof",
        Arabic: "سقف",
        ExampleInEnglish: "The roof of the house is red.",
        ExampleInArabic: "سقف المنزل أحمر."
    },
    {
        English: "Stairs",
        Arabic: "سلم",
        ExampleInEnglish: "Use the stairs to go up.",
        ExampleInArabic: "استخدم السلم للصعود."
    },
    {
        English: "Entrance",
        Arabic: "مدخل",
        ExampleInEnglish: "The entrance to the park is beautiful.",
        ExampleInArabic: "مدخل الحديقة جميل."
    },
    {
        English: "Exist",
        Arabic: "يوجد",
        ExampleInEnglish: "Do ghosts exist?",
        ExampleInArabic: "هل توجد الأشباح؟"
    },
    {
        English: "Shopping center",
        Arabic: "مركز تسوق",
        ExampleInEnglish: "Let's go to the shopping center.",
        ExampleInArabic: "لنذهب إلى مركز التسوق."
    },
    {
        English: "Ceiling",
        Arabic: "سقف الغرفة",
        ExampleInEnglish: "The ceiling of the room is painted.",
        ExampleInArabic: "سُقف الغرفة مطلي."
    },
    {
        English: "Walls",
        Arabic: "الجدران",
        ExampleInEnglish: "The walls are painted in bright colors.",
        ExampleInArabic: "الجدران مرسومة بألوان زاهية."
    },
    {
        English: "Windows",
        Arabic: "النوافذ",
        ExampleInEnglish: "Open the windows for fresh air.",
        ExampleInArabic: "افتح النوافذ للهواء النقي."
    },
    {
        English: "Stairs",
        Arabic: "سلم",
        ExampleInEnglish: "Use the stairs to go down.",
        ExampleInArabic: "استخدم السلم للنزول."
    },
    {
        English: "Garden",
        Arabic: "حديقة",
        ExampleInEnglish: "I enjoy reading in the garden.",
        ExampleInArabic: "أستمتع بالقراءة في الحديقة."
    },
    {
        English: "Car park",
        Arabic: "موقف السيارات",
        ExampleInEnglish: "The car park is full.",
        ExampleInArabic: "موقف السيارات ممتلئ."
    },
    {
        English: "Farmer",
        Arabic: "مزارع",
        ExampleInEnglish: "The farmer grows crops.",
        ExampleInArabic: "يزرع المزارع المحاصيل."
    },
    {
        English: "Grow food",
        Arabic: "يزرع الطعام",
        ExampleInEnglish: "Farmers grow food for the community.",
        ExampleInArabic: "يزرع المزارعون الطعام للمجتمع."
    },
    {
        English: "Look after",
        Arabic: "رعاية",
        ExampleInEnglish: "She looks after her younger brother.",
        ExampleInArabic: "إنها تعتني بأخيها الأصغر."
    },
    {
        English: "Manager",
        Arabic: "مدير",
        ExampleInEnglish: "He is the manager of the team.",
        ExampleInArabic: "إنه مدير الفريق."
    },
    {
        English: "Doctor",
        Arabic: "طبيب",
        ExampleInEnglish: "The doctor examined the patient.",
        ExampleInArabic: "الطبيب فحص المريض."
    },
    {
        English: "Manage",
        Arabic: "إدارة",
        ExampleInEnglish: "She knows how to manage her time.",
        ExampleInArabic: "تعرف كيف تدير وقتها."
    },
    {
        English: "Journalist",
        Arabic: "صحفي",
        ExampleInEnglish: "The journalist writes for the newspaper.",
        ExampleInArabic: "الصحفي يكتب للصحيفة."
    },
    {
        English: "Software engineer",
        Arabic: "مهندس برمجيات",
        ExampleInEnglish: "The software engineer develops apps.",
        ExampleInArabic: "يقوم مهندس البرمجيات بتطوير التطبيقات."
    },
    {
        English: "Football player",
        Arabic: "لاعب كرة القدم",
        ExampleInEnglish: "He dreams of becoming a football player.",
        ExampleInArabic: "يحلم بأن يصبح لاعب كرة القدم."
    },

    {
        English: "School teacher",
        Arabic: "معلم مدرسة",
        ExampleInEnglish: "The school teacher educates children.",
        ExampleInArabic: "المعلم في المدرسة يعلم الأطفال."
    },
    {
        English: "Fitness instructor",
        Arabic: "مدرب لياقة",
        ExampleInEnglish: "The fitness instructor leads the workout.",
        ExampleInArabic: "مدرب اللياقة يقود التمرين."
    },
    {
        English: "Language teacher",
        Arabic: "معلم لغة",
        ExampleInEnglish: "The language teacher teaches Spanish.",
        ExampleInArabic: "معلم اللغة يدرس الإسبانية."
    },
    {
        English: "Care for",
        Arabic: "العناية بـ",
        ExampleInEnglish: "She cares for her elderly parents.",
        ExampleInArabic: "إنها تعتني بوالديها المسنين."
    },
    {
        English: "Make software",
        Arabic: "صنع البرمجيات",
        ExampleInEnglish: "They make software for businesses.",
        ExampleInArabic: "يقومون بصنع برمجيات للشركات."
    },
    {
        English: "Do exercise",
        Arabic: "ممارسة التمرين",
        ExampleInEnglish: "I do exercise every morning.",
        ExampleInArabic: "أمارس التمرين كل صباح."
    },
    {
        English: "Garden",
        Arabic: "حديقة",
        ExampleInEnglish: "They have a beautiful garden.",
        ExampleInArabic: "لديهم حديقة جميلة."
    },
    {
        English: "Plastic",
        Arabic: "بلاستيك",
        ExampleInEnglish: "Reduce the use of plastic.",
        ExampleInArabic: "قلل من استخدام البلاستيك."
    },
    {
        English: "Wood",
        Arabic: "خشب",
        ExampleInEnglish: "The table is made of wood.",
        ExampleInArabic: "الطاولة مصنوعة من الخشب."
    },
    {
        English: "Glass",
        Arabic: "زجاج",
        ExampleInEnglish: "The cup is made of glass.",
        ExampleInArabic: "الكوب مصنوع من الزجاج."
    },
    {
        English: "English",
        Arabic: "إنجليزي",
        ExampleInEnglish: "Can you give me an example?",
        ExampleInArabic: "هل يمكنك أن تعطيني مثالًا؟"
    },
    {
        English: "Skyscraper",
        Arabic: "ناطحة سحاب",
        ExampleInEnglish: "The city skyline is filled with skyscrapers.",
        ExampleInArabic: "أفق المدينة مليء بناطحات السحاب."
    },
    {
        English: "Advice",
        Arabic: "نصيحة",
        ExampleInEnglish: "Can you give me some advice?",
        ExampleInArabic: "هل يمكنك أن تعطيني بعض النصائح؟"
    },
    {
        English: "Boring",
        Arabic: "ممل",
        ExampleInEnglish: "The lecture was boring.",
        ExampleInArabic: "كانت المحاضرة مملة."
    },
    {
        English: "Earn",
        Arabic: "كسب",
        ExampleInEnglish: "I want to earn more money.",
        ExampleInArabic: "أريد أن أكسب المزيد من المال."
    },
    {
        English: "Hard",
        Arabic: "صعب",
        ExampleInEnglish: "Learning a new language can be hard.",
        ExampleInArabic: "يمكن أن يكون تعلم لغة جديدة صعبًا."
    },
    {
        English: "Help",
        Arabic: "مساعدة",
        ExampleInEnglish: "Can you help me with my homework?",
        ExampleInArabic: "هل يمكنك مساعدتي في واجبي المنزلي؟"
    },
    {
        English: "Job",
        Arabic: "وظيفة",
        ExampleInEnglish: "He is looking for a new job.",
        ExampleInArabic: "هو يبحث عن وظيفة جديدة."
    },
    {
        English: "Work",
        Arabic: "عمل",
        ExampleInEnglish: "I have to go to work early tomorrow.",
        ExampleInArabic: "يجب أن أذهب إلى العمل باكرًا غدًا."
    },
    {
        English: "Strong",
        Arabic: "قوي",
        ExampleInEnglish: "The athlete is very strong.",
        ExampleInArabic: "الرياضي قوي جدًا."
    },
    {
        English: "Kind",
        Arabic: "لطيف",
        ExampleInEnglish: "She is a kind and generous person.",
        ExampleInArabic: "إنها شخص لطيف وسخي."
    },
    {
        English: "Polite",
        Arabic: "مؤدب",
        ExampleInEnglish: "Always be polite to others.",
        ExampleInArabic: "كن دائمًا مؤدبًا مع الآخرين."
    },
    {
        English: "Example",
        Arabic: "مثال",
        ExampleInEnglish: "Can you give me an example?",
        ExampleInArabic: "هل يمكنك أن تعطيني مثالًا؟"
    },
    {
        English: "Fit",
        Arabic: "لائق",
        ExampleInEnglish: "Regular exercise helps you stay fit.",
        ExampleInArabic: "الرياضة الدورية تساعدك على البقاء لائقًا."
    },
    {
        English: "Teach",
        Arabic: "يعلم",
        ExampleInEnglish: "The teacher will teach a new lesson today.",
        ExampleInArabic: "سيقوم المعلم بتعليم درس جديد اليوم."
    },
    {
        English: "Comfortable",
        Arabic: "مريح",
        ExampleInEnglish: "The chair is very comfortable.",
        ExampleInArabic: "الكرسي مريح جدًا."
    },
    {
        English: "Glass",
        Arabic: "زجاج",
        ExampleInEnglish: "The window is made of glass.",
        ExampleInArabic: "النافذة مصنوعة من الزجاج."
    },
    {
        English: "Leather",
        Arabic: "جلد",
        ExampleInEnglish: "The sofa is covered in leather.",
        ExampleInArabic: "الأريكة مغطاة بالجلد."
    },
    {
        English: "Metal",
        Arabic: "معدن",
        ExampleInEnglish: "The table is made of metal.",
        ExampleInArabic: "الطاولة مصنوعة من المعدن."
    },
    {
        English: "Plastic",
        Arabic: "بلاستيك",
        ExampleInEnglish: "Avoid using too much plastic.",
        ExampleInArabic: "تجنب استخدام الكثير من البلاستيك."
    },
    {
        English: "Uncomfortable",
        Arabic: "غير مريح",
        ExampleInEnglish: "The bed is uncomfortable.",
        ExampleInArabic: "السرير غير مريح."
    },
    {
        English: "Wooden",
        Arabic: "خشبي",
        ExampleInEnglish: "The shelves are made of wooden planks.",
        ExampleInArabic: "الرفوف مصنوعة من لوحات خشبية."
    },
    {
        English: "Cheap",
        Arabic: "رخيص",
        ExampleInEnglish: "This shirt is very cheap.",
        ExampleInArabic: "هذا القميص رخيص جدًا."
    },
    {
        English: "Expensive",
        Arabic: "غالي",
        ExampleInEnglish: "The jewelry is expensive.",
        ExampleInArabic: "المجوهرات غالية."
    },
    {
        English: "Far",
        Arabic: "بعيد",
        ExampleInEnglish: "The beach is far from here.",
        ExampleInArabic: "الشاطئ بعيد عن هنا."
    },
    {
        English: "Modern",
        Arabic: "حديث",
        ExampleInEnglish: "The building has a modern design.",
        ExampleInArabic: "المبنى لديه تصميم حديث."
    },
    {
        English: "Near",
        Arabic: "قريب",
        ExampleInEnglish: "The supermarket is near my house.",
        ExampleInArabic: "السوبرماركت قريب من منزلي."
    },
    {
        English: "Noisy",
        Arabic: "صاخب",
        ExampleInEnglish: "The city center is noisy.",
        ExampleInArabic: "وسط المدينة صاخب."
    },
    {
        English: "Quiet",
        Arabic: "هادئ",
        ExampleInEnglish: "The village is quiet and peaceful.",
        ExampleInArabic: "القرية هادئة وسلمية."
    },
    {
        English: "City",
        Arabic: "مدينة",
        ExampleInEnglish: "New York is a bustling city.",
        ExampleInArabic: "نيويورك هي مدينة حيوية."
    },
    {
        English: "Height",
        Arabic: "ارتفاع",
        ExampleInEnglish: "The mountain has a great height.",
        ExampleInArabic: "الجبل لديه ارتفاع كبير."
    },
    {
        English: "Floors",
        Arabic: "طوابق",
        ExampleInEnglish: "The building has 20 floors.",
        ExampleInArabic: "المبنى يحتوي على 20 طابقًا."
    },
    {
        English: "Recognize",
        Arabic: "يعترف",
        ExampleInEnglish: "I couldn't recognize him in the disguise.",
        ExampleInArabic: "لم أستطع التعرف عليه بالزي الغير معتاد."
    },
    {
        English: "Strange",
        Arabic: "غريب",
        ExampleInEnglish: "The noise was coming from a strange place.",
        ExampleInArabic: "كان الضوضاء قادمة من مكان غريب."
    },
    {
        English: "Capital",
        Arabic: "عاصمة",
        ExampleInEnglish: "Cairo is the capital of Egypt.",
        ExampleInArabic: "القاهرة هي عاصمة مصر."
    },
    {
        English: "Ancient",
        Arabic: "قديم",
        ExampleInEnglish: "The ruins are from an ancient civilization.",
        ExampleInArabic: "الأطلال تعود إلى حضارة قديمة."
    },
    {
        English: "Rock",
        Arabic: "صخرة",
        ExampleInEnglish: "The trail led us to a large rock.",
        ExampleInArabic: "أدى المسار إلينا إلى صخرة كبيرة."
    },
    {
        English: "Bridge",
        Arabic: "جسر",
        ExampleInEnglish: "The bridge spans the river.",
        ExampleInArabic: "الجسر يمتد فوق النهر."
    },
    {
        English: "Cave",
        Arabic: "كهف",
        ExampleInEnglish: "We explored a dark cave.",
        ExampleInArabic: "استكشفنا كهفًا مظلمًا."
    },
    {
        English: "Crowded",
        Arabic: "مزدحم",
        ExampleInEnglish: "The market was crowded with people.",
        ExampleInArabic: "كان السوق مزدحمًا بالناس."
    },
    {
        English: "Expensive",
        Arabic: "غالي",
        ExampleInEnglish: "The luxury items were expensive.",
        ExampleInArabic: "كانت العناصر الفاخرة غالية الثمن."
    },

    {
        English: "Popular",
        Arabic: "شهير",
        ExampleInEnglish: "The singer is very popular.",
        ExampleInArabic: "المغني شهير جدًا."
      },
      {
        English: "Rural",
        Arabic: "ريفي",
        ExampleInEnglish: "They live in a rural area.",
        ExampleInArabic: "يعيشون في منطقة ريفية."
      },
      {
        English: "Urban",
        Arabic: "حضري",
        ExampleInEnglish: "Tokyo is a bustling urban center.",
        ExampleInArabic: "طوكيو هي مركز حضري حيوي."
      },
      {
        English: "Woods",
        Arabic: "غابة",
        ExampleInEnglish: "We went for a hike in the woods.",
        ExampleInArabic: "ذهبنا للمشي في الغابة."
      },
      {
        English: "Area",
        Arabic: "منطقة",
        ExampleInEnglish: "This is a residential area.",
        ExampleInArabic: "هذه منطقة سكنية."
      },
      {
        English: "Traffic",
        Arabic: "حركة المرور",
        ExampleInEnglish: "The traffic was heavy during rush hour.",
        ExampleInArabic: "كانت حركة المرور كثيفة خلال ساعات الذروة."
      },
      {
        English: "Field",
        Arabic: "حقل",
        ExampleInEnglish: "They played soccer in the field.",
        ExampleInArabic: "لعبوا كرة القدم في الحقل."
      },
      {
        English: "Is located",
        Arabic: "يقع",
        ExampleInEnglish: "The museum is located in the city center.",
        ExampleInArabic: "المتحف يقع في وسط المدينة."
      },
      {
        English: "Lecture",
        Arabic: "محاضرة",
        ExampleInEnglish: "I attended a fascinating lecture.",
        ExampleInArabic: "حضرت محاضرة مثيرة للاهتمام."
      },
      {
        English: "Activities",
        Arabic: "أنشطة",
        ExampleInEnglish: "The school offers various activities.",
        ExampleInArabic: "تقدم المدرسة أنشطة متنوعة."
      },
      {
        English: "Traditional",
        Arabic: "تقليدي",
        ExampleInEnglish: "They celebrate traditional festivals.",
        ExampleInArabic: "يحتفلون بالمهرجانات التقليدية."
      },
      {
        English: "Culture",
        Arabic: "ثقافة",
        ExampleInEnglish: "Japan has a rich cultural heritage.",
        ExampleInArabic: "اليابان لديها تراث ثقافي غني."
      },
      {
        English: "Entertainment",
        Arabic: "ترفيه",
        ExampleInEnglish: "The theme park offers entertainment for all ages.",
        ExampleInArabic: "يقدم المدينة متنزه مواضيع ترفيهية لجميع الأعمار."
      },
      {
        English: "Enjoy",
        Arabic: "استمتع",
        ExampleInEnglish: "I enjoy reading books.",
        ExampleInArabic: "أستمتع بقراءة الكتب."
      },
      {
        English: "Celebrate",
        Arabic: "يحتفل",
        ExampleInEnglish: "We celebrate birthdays with a party.",
        ExampleInArabic: "نحتفل بالأعياد بحفلة."
      },
      {
        English: "Costume",
        Arabic: "زي",
        ExampleInEnglish: "They wore colorful costumes for the parade.",
        ExampleInArabic: "ارتدوا أزياء ملونة للاحتفال بالموكب."
      },
      {
        English: "Dish",
        Arabic: "طبق",
        ExampleInEnglish: "Paella is a traditional Spanish dish.",
        ExampleInArabic: "الباييا هو طبق إسباني تقليدي."
      },
      {
        English: "Decorated",
        Arabic: "مزين",
        ExampleInEnglish: "The room was beautifully decorated.",
        ExampleInArabic: "كانت الغرفة مزينة بشكل جميل."
      },
      {
        English: "Fireworks",
        Arabic: "ألعاب نارية",
        ExampleInEnglish: "The sky was lit up with fireworks.",
        ExampleInArabic: "كانت السماء مضاءة بالألعاب النارية."
      },
      {
        English: "Gift",
        Arabic: "هدية",
        ExampleInEnglish: "She received a thoughtful gift.",
        ExampleInArabic: "تلقت هدية مفكرة."
      },
      {
        English: "Parade",
        Arabic: "موكب",
        ExampleInEnglish: "The parade marched through the streets.",
        ExampleInArabic: "الموكب سار في الشوارع."
      },
      {
        English: "Population",
        Arabic: "سكان",
        ExampleInEnglish: "The city has a diverse population.",
        ExampleInArabic: "المدينة لديها سكان متنوعين."
      },
      {
        English: "Expert",
        Arabic: "خبير",
        ExampleInEnglish: "He is an expert in computer programming.",
        ExampleInArabic: "إنه خبير في برمجة الحاسوب."
      },
      {
        English: "Countryside",
        Arabic: "ريف",
        ExampleInEnglish: "They live in the peaceful countryside.",
        ExampleInArabic: "يعيشون في الريف الهادئ."
      },
      {
        English: "Opportunity",
        Arabic: "فرصة",
        ExampleInEnglish: "This job is a great opportunity.",
        ExampleInArabic: "هذه الوظيفة فرصة رائعة."
      },
      {
        English: "Pollution",
        Arabic: "تلوث",
        ExampleInEnglish: "Air pollution is a serious problem.",
        ExampleInArabic: "التلوث الهوائي مشكلة خطيرة."
      },
      {
        English: "City center",
        Arabic: "وسط المدينة",
        ExampleInEnglish: "The city center is vibrant and lively.",
        ExampleInArabic: "وسط المدينة حيوي ونابض بالحياة."
      },
      {
        English: "Local",
        Arabic: "محلي",
        ExampleInEnglish: "Support local businesses.",
        ExampleInArabic: "قدم الدعم للأعمال المحلية."
      },
      {
        English: "Noisy",
        Arabic: "مزعج",
        ExampleInEnglish: "The street is noisy with traffic.",
        ExampleInArabic: "الشارع صاخب بسبب حركة المرور."
      },
      {
        English: "Quiet",
        Arabic: "هادئ",
        ExampleInEnglish: "The park is quiet and serene.",
        ExampleInArabic: "الحديقة هادئة وساكنة."
      },
      {
        English: "Lucky",
        Arabic: "محظوظ",
        ExampleInEnglish: "He considers himself lucky to have a good job.",
        ExampleInArabic: "يعتبر نفسه محظوظًا للحصول على وظيفة جيدة."
      },
      {
        English: "History",
        Arabic: "تاريخ",
        ExampleInEnglish: "The city has a rich history.",
        ExampleInArabic: "المدينة لديها تاريخ غني."
      },
      {
        English: "Popular",
        Arabic: "شهير",
        ExampleInEnglish: "The restaurant is popular.",
        ExampleInArabic: "هذا المطعم مشهور."
      },
      {
        English: "Highlight",
        Arabic: "يسلط الضوء",
        ExampleInEnglish: "He highlighted the importance of clean water.",
        ExampleInArabic: "هو سلط الضوء على أهمية الماء النظيف."
      },
      {
        English: "Take part",
        Arabic: "يشارك",
        ExampleInEnglish: "I take part in every good activity.",
        ExampleInArabic: "أشارك في أي نشاط خيّر."
      },
      {
        English: "Visitor",
        Arabic: "زائر",
        ExampleInEnglish: "Many visitors come here every year.",
        ExampleInArabic: "كثير من الزار يأتون إلى هنا كل عام."
      }
];

const collocationsData = [
    {
      "English": "Go to a celebration",
      "Arabic": "يذهب إلى احتفال"
    },
    {
      "English": "Go to university",
      "Arabic": "يذهب إلى الجامعة"
    },
    {
      "English": "Go to an event",
      "Arabic": "يذهب إلى حدث"
    },
    {
      "English": "Go to a lecture",
      "Arabic": "يذهب إلى محاضرة"
    },
    {
      "English": "Go to a party",
      "Arabic": "يذهب إلى حفلة"
    },
    {
      "English": "Take part",
      "Arabic": "شارك"
    },
    {
      "English": "Take place",
      "Arabic": "يحدث"
    },
    {
      "English": "Take your time",
      "Arabic": "خذ وقتك"
    },
    {
      "English": "Have a celebration",
      "Arabic": "يحتفل بـ"
    },
    {
      "English": "Have an event",
      "Arabic": "لديه موعد مع حدث معين"
    },
    {
      "English": "Have fun",
      "Arabic": "يستمتع"
    },
    {
      "English": "Have a lecture",
      "Arabic": "لديه محاضرة"
    },
    {
      "English": "Have a party",
      "Arabic": "لديه حفلة"
    }
  ];
      
export default function Vocabs() {
    return (
        <div className="container mx-auto mt-8 overflow-x-auto ">
            <Head>
                <title>الكلمات المطلوب حفظها في الاختبار النهائي - جامعة الملك عبد العزيز</title>
                <meta name="keywords" content="اللغة الإنجليزية، جامعة الملك عبد العزيز، انقلش جامعة الملك عبد العزيز، فوكاب الفاينل جامعة الملك عبد العزيز، معهد اللغة الإنجليزية جامعة الملك عبد العزيز." />
                <meta name="description" content="الكلمات المطلوب حفظها في الاختبار النهائي لجامعة الملك عبد العزيز المستوى الأول علمي" />
                <meta name="author" content="Odat" />
                <meta name="language" content="ar" />
                <meta name="robots" content="index, follow" />
      
            </Head>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FJ4P5C4K33"></Script>
        
        <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-FJ4P5C4K33');
        `}
      </Script>
            <h1>الكلمات المطلوب حفظها في الاختبار النهائي المستوى الأول علمي</h1>
            <br/>
      <table className="w-full border border-gray-300 text-sm responsiveTextSize">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">English</th>
            <th className="py-2 px-4 border-b">Arabic</th>
            <th className="py-2 px-4 border-b">Example in English</th>
            <th className="py-2 px-4 border-b">Example in Arabic</th>
          </tr>
        </thead>
        <tbody>
          {vocabularyData.map((entry, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{entry.English}</td>
              <td className="py-2 px-4 border-b">{entry.Arabic}</td>
              <td className="py-2 px-4 border-b">{entry.ExampleInEnglish}</td>
              <td className="py-2 px-4 border-b">{entry.ExampleInArabic}</td>
            </tr>
          ))}
        </tbody>
      </table>
        <h2>Collocations: (تراكيب لغوية)</h2>
      <table className="w-full border border-gray-300 text-sm responsiveTextSize">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">English</th>
            <th className="py-2 px-4 border-b">Arabic</th>
          </tr>
        </thead>
        <tbody>
          {collocationsData.map((entry, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{entry.English}</td>
              <td className="py-2 px-4 border-b">{entry.Arabic}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
      <p dir="rtl">*اعلم أن هذه المفردات هي فقط جزئية الاختبار النهائي وعليك مراجعة مفردات الاختبار النصفي معها</p>
        </div>
    )
}