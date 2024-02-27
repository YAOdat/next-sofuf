import React from "react";
import Script from 'next/script'
import type { Metadata } from 'next'

const midVocabularyDataE120 = [
    {
        English: "Angry",
        Arabic: "غاضب",
        ExampleInEnglish: "The child was angry because he lost his toy.",
        ExampleInArabic: "كان الطفل غاضبًا لأنه فقد لعبته."
    },
    {
        English: "Cool",
        Arabic: "رائع",
        ExampleInEnglish: "The weather is cool today.",
        ExampleInArabic: "الجو رائع اليوم."
    },
    {
        English: "Dry",
        Arabic: "جاف",
        ExampleInEnglish: "The towel is dry now.",
        ExampleInArabic: "المنشفة جافة الآن."
    },
    {
        English: "Energy",
        Arabic: "طاقة",
        ExampleInEnglish: "He needs more energy to finish the race.",
        ExampleInArabic: "يحتاج إلى المزيد من الطاقة لإنهاء السباق."
    },
    {
        English: "Humid",
        Arabic: "رطب",
        ExampleInEnglish: "The air feels humid today.",
        ExampleInArabic: "الجو  رطب اليوم."
    },
    {
        English: "Prefer",
        Arabic: "أفضل",
        ExampleInEnglish: "I prefer coffee over tea.",
        ExampleInArabic: "أفضل القهوة على الشاي."
    },
    {
        English: "Upset",
        Arabic: "مضطرب",
        ExampleInEnglish: "She felt upset after the argument.",
        ExampleInArabic: "شعرت بالضيق بعد الجدال."
    },
    {
        English: "Becoming",
        Arabic: "يصبح",
        ExampleInEnglish: "Technology is becoming more advanced every day.",
        ExampleInArabic: "تتطور التكنولوجيا بشكل أكثر تقدمًا كل يوم."
    },
    {
        English: "Unusual",
        Arabic: "غير عادي",
        ExampleInEnglish: "It was an unusual sight to see a penguin in the desert.",
        ExampleInArabic: "كان مشهدًا غير عادي لرؤية طائر البطريق في الصحراء."
    },
    {
        English: "Discover",
        Arabic: "يكتشف",
        ExampleInEnglish: "Scientists discovered a new species of fish.",
        ExampleInArabic: "اكتشف العلماء نوعًا جديدًا من الأسماك."
    },
    {
        English: "Disappear",
        Arabic: "يختفي",
        ExampleInEnglish: "The magician made the rabbit disappear in a puff of smoke.",
        ExampleInArabic: "جعل الساحر الأرنب يختفي في سحابة من الدخان."
    },
    {
        English: "Believe",
        Arabic: "أؤمن",
        ExampleInEnglish: "I believe in hard work and dedication.",
        ExampleInArabic: "أؤمن بالعمل الجاد والتفاني."
    },
    {
        English: "Save",
        Arabic: "يوفر",
        ExampleInEnglish: "It's important to save money for the future.",
        ExampleInArabic: "من المهم توفير المال للمستقبل."
    },
    {
        English: "Look after",
        Arabic: "يعتني",
        ExampleInEnglish: "She looks after her children with love and care.",
        ExampleInArabic: "تعتني بأطفالها بحب ورعاية."
    },
    {
        English: "Carefully",
        Arabic: "بعناية",
        ExampleInEnglish: "Read the instructions carefully before starting the experiment.",
        ExampleInArabic: "اقرأ التعليمات بعناية قبل البدء بالتجربة."
    },
    {
        English: "Break",
        Arabic: "يكسر",
        ExampleInEnglish: "He accidentally broke the vase.",
        ExampleInArabic: "كسر المزهرية عن طريق الخطأ."
    },
    {
        English: "Colleague",
        Arabic: "زميل",
        ExampleInEnglish: "I work with a great colleague.",
        ExampleInArabic: "أعمل مع زميل رائع."
    },

    {
        English: "earn",
        Arabic: "يكسب",
        ExampleInEnglish: "He works hard to earn money.",
        ExampleInArabic: "يعمل بجد ليكسب المال ."
    },
    {
        English: "profit",
        Arabic: "ربح",
        ExampleInEnglish: "The company made a significant profit last quarter.",
        ExampleInArabic: "حققت الشركة ربحًا كبيرًا في الربع الأخير."
    },
    {
        English: "project",
        Arabic: "مشروع",
        ExampleInEnglish: "We're working on a new project that aims to improve efficiency.",
        ExampleInArabic: "نعمل على مشروع جديد يهدف إلى تحسين الكفاءة."
    },
    {
        English: "spend time",
        Arabic: "يقضي الوقت",
        ExampleInEnglish: "I like to spend time with my family on weekends.",
        ExampleInArabic: "أحب قضاء الوقت مع عائلتي في عطلات نهاية الأسبوع."
    },
    {
        English: "waste time",
        Arabic: "يهدر الوقت",
        ExampleInEnglish: "Don't waste time on things that don't matter.",
        ExampleInArabic: "لا تهدر الوقت في الأمور التي لا تهم."
    },
    {
        English: "find out",
        Arabic: "يكتشف",
        ExampleInEnglish: "I need to find out more information before making a decision.",
        ExampleInArabic: "أحتاج إلى معرفة مزيد من المعلومات قبل اتخاذ قرار."
    },
    {
        English: "get by",
        Arabic: "يتجاوز الصعوبات",
        ExampleInEnglish: "During tough times, we find a way to get by.",
        ExampleInArabic: "في الأوقات الصعبة، نجد وسيلة للتجاوز."
    },
    {
        English: "look at",
        Arabic: "ينظر إلى",
        ExampleInEnglish: "She likes to look at the stars on clear nights.",
        ExampleInArabic: "تحب النظر إلى النجوم في الليالي الصافية."
    },
    {
        English: "run out",
        Arabic: "ينفد",
        ExampleInEnglish: "We need to buy groceries; we're running out of food.",
        ExampleInArabic: "نحتاج إلى شراء البقالة؛ نحن بصدد نفاد الطعام."
    },
    {
        English: "take over",
        Arabic: "يتولى",
        ExampleInEnglish: "The new manager will take over the team starting next month.",
        ExampleInArabic: "سيتولى المدير الجديد قيادة الفريق ابتداءً من الشهر القادم."
    },
    {
        English: "write down",
        Arabic: "يكتب أسفل",
        ExampleInEnglish: "Please write down your contact information on this form.",
        ExampleInArabic: "يرجى كتابة معلومات الاتصال الخاصة بك في هذا النموذج."
    },
    {
        English: "careless",
        Arabic: "غير مراعٍ",
        ExampleInEnglish: "Being careless with important documents can lead to problems.",
        ExampleInArabic: "الاهمال في التعامل مع الوثائق الهامة يمكن أن يؤدي إلى مشاكل."
    },
    {
        English: "customer",
        Arabic: "زبون",
        ExampleInEnglish: "Satisfying the customer is our top priority.",
        ExampleInArabic: "إرضاء الزبون هو أولويتنا الرئيسية."
    },
    {
        English: "goal",
        Arabic: "هدف",
        ExampleInEnglish: "Setting a clear goal helps in staying focused and motivated.",
        ExampleInArabic: "تحديد هدف واضح يساعد في البقاء مركزًا ومتحمسًا."
    },
    {
        English: "messy",
        Arabic: "فوضوي",
        ExampleInEnglish: "Her desk is always messy, but she knows where everything is.",
        ExampleInArabic: "مكتبها دائماً فوضوي، ولكنها تعرف أين كل شيء."
    },
    {
        English: "skill",
        Arabic: "مهارة",
        ExampleInEnglish: "Developing a new skill can open up new opportunities.",
        ExampleInArabic: "تطوير مهارة جديدة يمكن أن يفتح أفقًا جديدًا للفرص."
    },
    {
        English: "strength",
        Arabic: "قوة",
        ExampleInEnglish: "Knowing your strengths is essential for personal development.",
        ExampleInArabic: "معرفة نقاط قوتك ضرورية للتطور الشخصي."
    },
    {
        English: "weakness",
        Arabic: "ضعف",
        ExampleInEnglish: "Recognizing your weaknesses allows you to work on improvement.",
        ExampleInArabic: "الاعتراف بضعفك يتيح لك العمل على التحسين."
    },
    {
        English: "almost",
        Arabic: "تقريبًا",
        ExampleInEnglish: "We're almost finished with the project; just a few more tasks.",
        ExampleInArabic: "نحن تقريبًا انتهينا من المشروع؛ بضع مهام أخرى فقط."
    },
    {
        English: "cover",
        Arabic: "يغطي",
        ExampleInEnglish: "The blanket will cover you and keep you warm.",
        ExampleInArabic: "البطانية ستغطيك وتحافظ عليك دافئًا."
    },
    {
        English: "dangerous",
        Arabic: "خطير",
        ExampleInEnglish: "It's important to be cautious in dangerous situations.",
        ExampleInArabic: "من المهم أن نكون حذرين في الحالات الخطيرة."
    },
    {
        English: "huge",
        Arabic: "ضخم",
        ExampleInEnglish: "The elephant is a huge animal with a majestic presence.",
        ExampleInArabic: "الفيل حيوان ضخم بوجود مهيب."
    },
    {
        English: "last",
        Arabic: "آخر",
        ExampleInEnglish: "This is the last piece of cake; would you like it?",
        ExampleInArabic: "هذه هي آخر قطعة كعكة؛ هل ترغب فيها؟"
    },
    {
        English: "lightning",
        Arabic: "برق",
        ExampleInEnglish: "The lightning lit up the sky during the storm.",
        ExampleInArabic: "البرق أضاء السماء خلال العاصفة."
    },
    {
        English: "thunder",
        Arabic: "رعد",
        ExampleInEnglish: "The loud thunder scared the children during the storm.",
        ExampleInArabic: "الرعد الصاخب أخاف الأطفال خلال العاصفة."
    },
    {
        English: "shock",
        Arabic: "صدمة",
        ExampleInEnglish: "The unexpected news was a shock to everyone in the room.",
        ExampleInArabic: "كانت الأخبار غير المتوقعة صدمة للجميع في الغرفة."
    },
    {
        English: "rise",
        Arabic: "صعود",
        ExampleInEnglish: "The rise in temperature is noticeable during the summer months.",
        ExampleInArabic: "يلاحظ ارتفاع درجة الحرارة خلال أشهر الصيف."
    },
    {
        English: "decide",
        Arabic: "يقرر",
        ExampleInEnglish: "We need to decide on a location for the upcoming event.",
        ExampleInArabic: "علينا أن نقرر مكانًا للحدث القادم."
    },
    {
        English: "careful",
        Arabic: "حذر",
        ExampleInEnglish: "Be careful when handling fragile items to avoid breakage.",
        ExampleInArabic: "كن حذرًا عند التعامل مع الأشياء الهشة لتجنب الكسر."
    },
    {
        English: "precipitation",
        Arabic: "هطول",
        ExampleInEnglish: "The weather forecast predicts precipitation later in the day.",
        ExampleInArabic: "تتوقع توقعات الطقس هطول الأمطار في وقت لاحق من اليوم."
    },
    {
        English: "drop",
        Arabic: "يتساقط",
        ExampleInEnglish: "A drop of water fell from the leaf after the rain.",
        ExampleInArabic: "تساقط قطرة ماء من الورقة بعد المطر."
    },
    {
        English: "shock",
        Arabic: "صدمة",
        ExampleInEnglish: "The sudden change in plans was a shock to everyone.",
        ExampleInArabic: "كان التغيير المفاجئ في الخطط صدمة للجميع."
    },
    {
        English: "show",
        Arabic: "يظهر",
        ExampleInEnglish: "His actions show his true character.",
        ExampleInArabic: "تظهر أفعاله شخصيته الحقيقية."
    },
    {
        English: "temperature",
        Arabic: "درجة الحرارة",
        ExampleInEnglish: "The temperature dropped significantly overnight.",
        ExampleInArabic: "تنخفض درجة الحرارة بشكل كبير خلال الليل."
    },
    {
        English: "graph",
        Arabic: "رسم بياني",
        ExampleInEnglish: "The graph illustrates the growth of the company over the years.",
        ExampleInArabic: "الرسم البياني يوضح نمو الشركة على مر السنوات."
    },
    {
        English: "data",
        Arabic: "بيانات",
        ExampleInEnglish: "Collecting accurate data is crucial for making informed decisions.",
        ExampleInArabic: "جمع البيانات الدقيقة أمر حاسم لاتخاذ قرارات مستنيرة."
    },
    {
        English: "average",
        Arabic: "متوسط",
        ExampleInEnglish: "The average income of the population increased this year.",
        ExampleInArabic: "زادت الدخل المتوسط للسكان هذا العام."
    },
    {
        English: "organize",
        Arabic: "ينظم",
        ExampleInEnglish: "She likes to organize her schedule to maximize productivity.",
        ExampleInArabic: "تحب تنظيم جدولها لتحقيق أقصى إنتاجية."
    },
    {
        English: "apply",
        Arabic: "يطبق",
        ExampleInEnglish: "You should apply the principles you've learned in real-life situations.",
        ExampleInArabic: "يجب أن تطبق المبادئ التي تعلمتها في الحياة الواقعية."
    },
    {
        English: "results",
        Arabic: "نتائج",
        ExampleInEnglish: "Hard work and dedication often lead to positive results.",
        ExampleInArabic: "العمل الجاد والتفاني غالباً ما يؤديان إلى نتائج إيجابية."
    },
    {
        English: "occupation",
        Arabic: "مهنة",
        ExampleInEnglish: "Teaching is a noble occupation that shapes future generations.",
        ExampleInArabic: "التدريس مهنة نبيلة تشكل الأجيال القادمة."
    },
    {
        English: "colleague",
        Arabic: "زميل",
        ExampleInEnglish: "Collaborating with colleagues enhances creativity in the workplace.",
        ExampleInArabic: "التعاون مع الزملاء يعزز الإبداع في مكان العمل."
    },
    {
        English: "customers",
        Arabic: "زبائن",
        ExampleInEnglish: "Satisfied customers are more likely to become repeat customers.",
        ExampleInArabic: "الزبائن الراضين أكثر عرضة للتكرار كزبائن."
    },
    {
        English: "business plan",
        Arabic: "خطة العمل",
        ExampleInEnglish: "Before starting a business, it's crucial to create a detailed business plan.",
        ExampleInArabic: "قبل بدء عمل، من المهم إعداد خطة عمل مفصلة."
    },
    {
        English: "business contact",
        Arabic: "جهة اتصال (تجارية)",
        ExampleInEnglish: "Networking events are a great way to make valuable business contacts.",
        ExampleInArabic: "الفعاليات التواصلية هي وسيلة رائعة لإقامة اتصالات تجارية قيمة."
    },
    {
        English: "set up a business",
        Arabic: "افتتاح عمل",
        ExampleInEnglish: "She decided to set up a small business selling handmade crafts.",
        ExampleInArabic: "قررت إنشاء مشروع تجاري صغير لبيع الحرف اليدوية."
    },
    {
        English: "run a business",
        Arabic: "يدير عمل تجاري",
        ExampleInEnglish: "Running a successful business requires hard work.",
        ExampleInArabic: "إدارة عمل ناجح يتطلب العمل الجاد."
    },
    {
        English: "expand a business",
        Arabic: "توسيع عمل تجاري",
        ExampleInEnglish: "The company plans to expand its business to international markets.",
        ExampleInArabic: "تخطط الشركة لتوسيع عملها إلى الأسواق الدولية."
    },
    {
        English: "employee",
        Arabic: "موظف",
        ExampleInEnglish: "The company hired a new employee to help with the workload.",
        ExampleInArabic: "عينت الشركة موظفًا جديدًا للمساعدة في العبء العملي."
    },
    {
        English: "employ",
        Arabic: "يوظف",
        ExampleInEnglish: "Many businesses employ skilled professionals to enhance productivity.",
        ExampleInArabic: "توظف العديد من الشركات محترفين ماهرين لتعزيز الإنتاجية."
    },
    {
        English: "goal",
        Arabic: "هدف",
        ExampleInEnglish: "Setting a specific goal helps guide business efforts in the right direction.",
        ExampleInArabic: "تحديد هدف معين يساعد في توجيه جهود العمل في الاتجاه الصحيح."
    },
    {
        English: "partners",
        Arabic: "شركاء",
        ExampleInEnglish: "Successful businesses often have strong partnerships with reliable suppliers.",
        ExampleInArabic: "الشركات الناجحة غالبًا ما تكون لديها شراكات قوية مع موردين موثوقين."
    },
    {
        English: "advertise",
        Arabic: "يعلن",
        ExampleInEnglish: "Businesses use various channels to advertise their products and services.",
        ExampleInArabic: "تستخدم الشركات قنوات متنوعة للإعلان عن منتجاتها وخدماتها."
    },
    {
        English: "office",
        Arabic: "مكتب",
        ExampleInEnglish: "The new office space provides a comfortable and productive work environment.",
        ExampleInArabic: "المكتب الجديد يوفر بيئة عمل مريحة ومنتجة."
    },
    {
        English: "product",
        Arabic: "منتج",
        ExampleInEnglish: "The company is launching a new product in the market next month.",
        ExampleInArabic: "تطلق الشركة منتجًا جديدًا في السوق الشهر المقبل."
    },
    {
        English: "introduce",
        Arabic: "يقدم",
        ExampleInEnglish: "The team plans to introduce innovative features in the upcoming software update.",
        ExampleInArabic: "تخطط الفريق لتقديم ميزات مبتكرة في التحديث البرمجي القادم."
    },
    {
        English: "department",
        Arabic: "قسم",
        ExampleInEnglish: "Each department plays a crucial role in the overall success of the business.",
        ExampleInArabic: "يلعب كل قسم دورًا حاسمًا في النجاح الشامل للعمل."
    },
    {
        English: "manager",
        Arabic: "مدير",
        ExampleInEnglish: "The manager oversees the daily operations and ensures smooth workflow.",
        ExampleInArabic: "يشرف المدير على العمليات اليومية ويضمن سير العمل بسلاسة."
    },
    {
        English: "software",
        Arabic: "برنامج",
        ExampleInEnglish: "The new software simplifies tasks and improves efficiency.",
        ExampleInArabic: "البرنامج الجديد يبسط المهام ويعزز الكفاءة."
    },
    {
        English: "abuse",
        Arabic: "إساءة استخدام",
        ExampleInEnglish: "We should always speak up against any form of abuse.",
        ExampleInArabic: "يجب أن نتحدث دائمًا ضد أي شكل من أشكال إساءة الاستخدام."
    },
    {
        English: "condition (situation)",
        Arabic: "الوضع",
        ExampleInEnglish: "The living condition in the village is improving with new developments.",
        ExampleInArabic: "تتحسن الوضع المعيشي في القرية مع التطورات الجديدة."
    },
    {
        English: "cruel",
        Arabic: "قاسي",
        ExampleInEnglish: "Being cruel to animals is not acceptable; they deserve kindness.",
        ExampleInArabic: "التصرف القاسي مع الحيوانات غير مقبول؛ إنها تستحق اللطف."
    },
    {
        English: "issue",
        Arabic: "قضية",
        ExampleInEnglish: "Environmental protection is an important global issue we need to address.",
        ExampleInArabic: "حماية البيئة هي قضية عالمية هامة يجب أن نتناولها."
    },
    {
        English: "protect",
        Arabic: "يحمي",
        ExampleInEnglish: "It's our responsibility to protect the environment for future generations.",
        ExampleInArabic: "من مسؤوليتنا حماية البيئة للأجيال القادمة."
    },
    {
        English: "suffer",
        Arabic: "يعاني",
        ExampleInEnglish: "No one should suffer from hunger; we must work to end poverty.",
        ExampleInArabic: "لا يجب أن يعاني أحد من الجوع؛ يجب أن نعمل على إنهاء الفقر."
    },
    {
        English: "survive",
        Arabic: "يبقى على قيد الحياة",
        ExampleInEnglish: "Plants need sunlight to survive and grow.",
        ExampleInArabic: "تحتاج النباتات إلى أشعة الشمس للبقاء على قيد الحياة والنمو."
    },
    {
        English: "welfare",
        Arabic: "رفاهية",
        ExampleInEnglish: "Providing education and healthcare contributes to the welfare of a community.",
        ExampleInArabic: "توفير التعليم والرعاية الصحية يسهم في رفاهية المجتمع."
    },
    {
        English: "melt",
        Arabic: "يذوب",
        ExampleInEnglish: "Ice cream will melt if left in the sun for too long.",
        ExampleInArabic: "ستذوب المثلجات إذا تُركت في الشمس لفترة طويلة جداً."
    },
    {
        English: "source",
        Arabic: "مصدر",
        ExampleInEnglish: "Water is a vital source for all living beings.",
        ExampleInArabic: "الماء هو مصدر حيوي لجميع الكائنات الحية."
    },
    {
        English: "endangered",
        Arabic: "مهدد بالانقراض",
        ExampleInEnglish: "Efforts are being made to protect endangered species from extinction.",
        ExampleInArabic: "تُبذل جهود لحماية الأنواع المهددة بالانقراض من الانقراض."
    },
    {
        English: "habitat",
        Arabic: "بيئة",
        ExampleInEnglish: "Preserving natural habitats is essential for the survival of many species.",
        ExampleInArabic: "الحفاظ على البيئات الطبيعية ضروري لبقاء العديد من الأنواع."
    },
    {
        English: "species",
        Arabic: "نوع",
        ExampleInEnglish: "There are many different species of birds living in the forest.",
        ExampleInArabic: "هناك العديد من الأنواع المختلفة من الطيور تعيش في الغابة."
    },
    {
        English: "depend on",
        Arabic: "يعتمد على",
        ExampleInEnglish: "Plants depend on sunlight for photosynthesis.",
        ExampleInArabic: "تعتمد النباتات على أشعة الشمس للتمثيل الضوئي."
    },
    {
        English: "damage",
        Arabic: "يضر",
        ExampleInEnglish: "Pollution can damage the environment and harm living organisms.",
        ExampleInArabic: "يمكن أن تضر التلوث البيئي وتؤذي الكائنات الحية."
    },
    {
        English: "threat",
        Arabic: "تهديد",
        ExampleInEnglish: "Climate change poses a serious threat to the planet and its inhabitants.",
        ExampleInArabic: "يشكل التغير المناخي تهديدًا خطيرًا للكوكب وسكانه."
    },

    {
        English: "abandon",
        Arabic: "يتخلى/يَهجر",
        ExampleInEnglish: "Some people abandon old buildings.",
        ExampleInArabic: "بعض الناس يهجرون المباني القديمة"
    },
    {
        English: "abandonment",
        Arabic: "التخلي",
        ExampleInEnglish: "The abandonment of the project surprised everyone.",
        ExampleInArabic: "أدهش التخلي عن المشروع الجميع."
    },
    {
        English: "abandoned",
        Arabic: "مهجور",
        ExampleInEnglish: "The abandoned house looked eerie in the moonlight.",
        ExampleInArabic: "بدا المنزل المهجور مخيفًا في ضوء القمر."
    },
    {
        English: "abuse",
        Arabic: "إساءة",
        ExampleInEnglish: "Abuse of power is not acceptable in any organization.",
        ExampleInArabic: "إساءة استخادم السلطة غير مقبولة في أي منظمة."
    },
    {
        English: "abused",
        Arabic: "مُساء إليه",
        ExampleInEnglish: "The abused animals die earlier than those that are treated well.",
        ExampleInArabic: "الحيوانات التي تتعرض للإساءة تموت أبكر من تلك التي تُعامل بشكل جيد."
    },
    {
        English: "abusive",
        Arabic: "مُسيء",
        ExampleInEnglish: "Using abusive language is not tolerated in this workplace.",
        ExampleInArabic: "لا يُسمح باستخدام لغة مُسيئة في هذا المكان."
    },
    {
        English: "abusively",
        Arabic: "بشكل مُسيء",
        ExampleInEnglish: "He spoke abusively to his colleagues, creating a hostile environment.",
        ExampleInArabic: "تحدث بشكل مُسيء إلى زملائه، مما أدى إلى بيئة عمل معادية."
    },
    {
        English: "analysis",
        Arabic: "تحليل",
        ExampleInEnglish: "The analysis of the data revealed shocking information.",
        ExampleInArabic: "كشف تحليل البيانات عن معلومات صادمة."
    },
    {
        English: "analyze",
        Arabic: "يُحلّل",
        ExampleInEnglish: "Scientists often analyze samples to draw conclusions.",
        ExampleInArabic: "غالبًا ما يقوم العلماء بتحليل عينات لاستخلاص استنتاجات."
    },
    {
        English: "analytical",
        Arabic: "تحليلي",
        ExampleInEnglish: "Her analytical skills helped in solving complex problems.",
        ExampleInArabic: "ساعدت مهاراتها التحليلية في حل المشكلات المعقدة."
    },
    {
        English: "analytically",
        Arabic: "بشكل تحليلي",
        ExampleInEnglish: "The situation needs to be approached analytically for a solution.",
        ExampleInArabic: "يجب التعامل مع الوضع بشكل تحليلي للعثور على حلاً."
    },
    {
        English: "communication",
        Arabic: "اتصال",
        ExampleInEnglish: "Effective communication is key to building strong relationships.",
        ExampleInArabic: "الاتصال الفعال هو مفتاح لبناء علاقات قوية.",
    },
    {
        English: "communicate",
        Arabic: "يتواصل",
        ExampleInEnglish: "We need to communicate clearly to avoid misunderstandings.",
        ExampleInArabic: "نحتاج إلى التواصل بشكل واضح لتجنب سوء التفاهم.",
    },
    {
        English: "communicative",
        Arabic: "تواصلي",
        ExampleInEnglish: "She is a communicative person who enjoys interacting with others.",
        ExampleInArabic: "هي شخصية تواصلية تستمتع بالتفاعل مع الآخرين.",
    },
    {
        English: "communicatively",
        Arabic: "بشكل تواصلي",
        ExampleInEnglish: "The speaker communicated effectively and informatively.",
        ExampleInArabic: "تواصل المتحدث بشكل فعال وغني بالمعلومات.",
    },
    {
        English: "connection",
        Arabic: "اتصال",
        ExampleInEnglish: "There is a strong connection between exercise and mental health.",
        ExampleInArabic: "هناك علاقة قوية بين التمارين الرياضية والصحة العقلية.",
    },
    {
        English: "connect",
        Arabic: "يربط",
        ExampleInEnglish: "We can connect with friends and family online.",
        ExampleInArabic: "يمكننا التواصل مع الأصدقاء والعائلة عبر الإنترنت.",
    },
    {
        English: "connected",
        Arabic: "مرتبط",
        ExampleInEnglish: "I am feeling connected and supported by my community.",
        ExampleInArabic: "أشعر بالارتباط والدعم من مجتمعي.",
    },
    {
        English: "damage",
        Arabic: "ضرر",
        ExampleInEnglish: "The storm caused significant damage to the buildings.",
        ExampleInArabic: "تسببت العاصفة بأضرار جسيمة بالمباني.",
    },
    {
        English: "damaged",
        Arabic: "مُتضرر",
        ExampleInEnglish: "The damaged car was towed away for repairs.",
        ExampleInArabic: "تم سحب السيارة المتضررة لإصلاحها.",
    },
    {
        English: "debate",
        Arabic: "مناظرة",
        ExampleInEnglish: "There was a lively debate about the new policy.",
        ExampleInArabic: "كان هناك نقاش حي حول السياسة الجديدة.",
    },
    {
        English: "debated",
        Arabic: "نوقش",
        ExampleInEnglish: "The issue of climate change is being debated by world leaders.",
        ExampleInArabic: "يتم مناقشة قضية تغير المناخ من قبل قادة العالم.",
    },
    {
        English: "debatable",
        Arabic: "قابل للنقاش",
        ExampleInEnglish: "The effectiveness of this new treatment is debatable.",
        ExampleInArabic: "فعالية هذا العلاج الجديد قابلة للنقاش.",
    },
    {
        English: "environment",
        Arabic: "بيئة",
        ExampleInEnglish: "We need to take care of the environment for future generations.",
        ExampleInArabic: "نحن بحاجة إلى رعاية البيئة للأجيال القادمة.",
    },
    {
        English: "environmental",
        Arabic: "بيئي",
        ExampleInEnglish: "Environmental pollution is a major concern.",
        ExampleInArabic: "التلوث البيئي مصدر قلق كبير.",
    },
    {
        English: "environmentally",
        Arabic: "بشكل بيئي",
        ExampleInEnglish: "We are committed to operating in an environmentally friendly way.",
        ExampleInArabic: "نحن ملتزمون بالعمل بطريقة صديقة للبيئة.",
    },
    {
        English: "involvement",
        Arabic: "مشاركة",
        ExampleInEnglish: "Community involvement is essential for creating positive change.",
        ExampleInArabic: "مشاركة المجتمع ضرورية لإحداث تغيير إيجابي.",
    },
    {
        English: "involve",
        Arabic: "يتضمن",
        ExampleInEnglish: "The project involved a team of scientists and engineers.",
        ExampleInArabic: "تضمن المشروع فريق من العلماء والمهندسين.",
    },
    {
        English: "involved",
        Arabic: "مُتضمن",
        ExampleInEnglish: "We need to examine all the costs involved in the project first.",
        ExampleInArabic: "نحتاج أن نفحص جميع التكاليف المتضمنة في المشروع.",
    },
    {
        English: "protection",
        Arabic: "حماية",
        ExampleInEnglish: "The protection of endangered species is crucial for biodiversity.",
        ExampleInArabic: "حماية الأنواع المهددة بالانقراض ضرورية للتنوع الحيوي."
    },
    {
        English: "protect",
        Arabic: "يحمي",
        ExampleInEnglish: "It is our duty to protect the environment for future generations.",
        ExampleInArabic: "من واجبنا حماية البيئة للأجيال القادمة."
    },
    {
        English: "protected",
        Arabic: "محمي",
        ExampleInEnglish: "The national park is a protected area, preserving its natural beauty.",
        ExampleInArabic: "المنتزه الوطني هو منطقة محمية، حافظة على جمالها الطبيعي."
    },
    {
        English: "protective",
        Arabic: "واقي",
        ExampleInEnglish: "Wearing a helmet is a protective measure for bike riders.",
        ExampleInArabic: "ارتداء الخوذة إجراء واقي لراكبي الدراجات."
    },
    {
        English: "protectively",
        Arabic: "بشكل واقي",
        ExampleInEnglish: "The mother held her child protectively in her arms.",
        ExampleInArabic: "الأم حملت طفلها بشكل واقي في ذراعيها."
    },
    {
        English: "support",
        Arabic: "دعم",
        ExampleInEnglish: "The community showed strong support for the local school.",
        ExampleInArabic: "أظهرت المجتمع دعمًا قويًا للمدرسة المحلية."
    },
    {
        English: "supporter",
        Arabic: "مؤيد",
        ExampleInEnglish: "She is a dedicated supporter of various environmental causes.",
        ExampleInArabic: "إنها مؤيدة مخلصة لأسباب بيئية متنوعة."
    },
    {
        English: "supportive",
        Arabic: "داعم",
        ExampleInEnglish: "Having a supportive team is essential for success in any project.",
        ExampleInArabic: "إن وجود فريق داعم أمر أساسي للنجاح في أي مشروع."
    },
    {
        English: "supportively",
        Arabic: "بشكل داعم",
        ExampleInEnglish: "He always speaks supportively, encouraging his colleagues.",
        ExampleInArabic: "يتحدث دائمًا بشكل داعم، مما يشجع زملاءه."
    },
    {
        English: "survivor",
        Arabic: "الناجي",
        ExampleInEnglish: "The survivor of the shipwreck shared his harrowing experience.",
        ExampleInArabic: "شارك الناجي من حادث غرق السفينة تجربته المروعة."
    },
    {
        English: "survival",
        Arabic: "البقاء",
        ExampleInEnglish: "Adaptation is crucial for the survival of species in changing environments.",
        ExampleInArabic: "التكيف أمر حاسم لبقاء الأنواع في بيئات متغيرة."
    },
    {
        English: "survive",
        Arabic: "يبقى",
        ExampleInEnglish: "In harsh conditions, only the fittest can survive.",
        ExampleInArabic: "في ظروف قاسية، يمكن للأقوى فقط أن يبقى."
    },
    {
        English: "survivable",
        Arabic: "قابل للبقاء",
        ExampleInEnglish: "Creating a survivable environment is essential for any living organism.",
        ExampleInArabic: "إنشاء بيئة قابلة للبقاء أمر أساسي لأي كائن حي."
    },
    {
        English: "surviving",
        Arabic: "باقٍ",
        ExampleInEnglish: "The surviving members of the expedition reached the summit.",
        ExampleInArabic: "وصل أعضاء الرحلة الباقون إلى قمة الجبل."
    },

];


export const metadata: Metadata = {
    title: 'الكلمات المطلوب حفظها في الاختبار النهائي - جامعة الملك عبد العزيز',
    keywords: 'اللغة الإنجليزية، جامعة الملك عبد العزيز، انقلش جامعة الملك عبد العزيز، فوكاب الفاينل جامعة الملك عبد العزيز، معهد اللغة الإنجليزية جامعة الملك عبد العزيز.',
    description: 'الكلمات المطلوب حفظها في الاختبار النهائي لجامعة الملك عبد العزيز المستوى الأول علمي',
    robots: 'index, follow',
}

export default function Vocabs() {
    return (
        <div className="container mx-auto mt-8 overflow-x-auto ">

            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FJ4P5C4K33"></Script>

            <Script id="google-analytics">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-FJ4P5C4K33');
        `}
            </Script>
            <h1 className="my-2">الكلمات المطلوب حفظها في الاختبار النهائي <br /> المستوى الثاني - علمي</h1>
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
                    {midVocabularyDataE120.map((entry, index) => (
                        <tr key={index}>
                            <td className="py-2 px-4 border-b">{entry.English}</td>
                            <td className="py-2 px-4 border-b">{entry.Arabic}</td>
                            <td className="py-2 px-4 border-b">{entry.ExampleInEnglish}</td>
                            <td className="py-2 px-4 border-b">{entry.ExampleInArabic}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}