/*
==========================================
ITI STUDY CENTRE
Employability Skills
Module 1
Introduction to Employability Skills
==========================================
*/

const module1Questions = [
  // =======================================================
// MODULE 1 : Introduction to Employability Skills
// Questions 1-5
// =======================================================

{
    id: "ES-M1-001",
    topic: "Introduction to Employability Skills",
    difficulty: "Easy",

    question: "Employability Skills का मुख्य उद्देश्य क्या है?",

    options: [
        "केवल परीक्षा पास करना",
        "केवल अंग्रेज़ी सीखना",
        "व्यक्ति को रोजगार के लिए तैयार करना",
        "केवल कंप्यूटर चलाना सीखना"
    ],

    answer: "C",

    answerText: "व्यक्ति को रोजगार के लिए तैयार करना",

    explanation:
        "Employability Skills व्यक्ति को नौकरी प्राप्त करने, कार्यस्थल पर सफल होने और करियर में आगे बढ़ने के लिए आवश्यक कौशल प्रदान करती हैं।",

    examTip:
        "Employability Skills का मुख्य उद्देश्य रोजगार क्षमता बढ़ाना है।"
},

{
    id: "ES-M1-002",

    topic: "Introduction to Employability Skills",

    difficulty: "Easy",

    question:
        "निम्नलिखित में से कौन Employability Skill का उदाहरण है?",

    options: [
        "Communication Skill",
        "Teamwork",
        "Digital Skill",
        "उपरोक्त सभी"
    ],

    answer: "D",

    answerText: "उपरोक्त सभी",

    explanation:
        "Communication, Teamwork तथा Digital Skill सभी Employability Skills के महत्वपूर्ण भाग हैं।",

    examTip:
        "Communication, Teamwork और Digital Skill हमेशा याद रखें।"
},

{
    id: "ES-M1-003",

    topic: "Employee",

    difficulty: "Easy",

    question:
        "Employee किसे कहा जाता है?",

    options: [
        "जो किसी संस्था में वेतन लेकर कार्य करता है",
        "जो केवल पढ़ाई करता है",
        "जो व्यवसाय का मालिक होता है",
        "जो बेरोजगार होता है"
    ],

    answer: "A",

    answerText:
        "जो किसी संस्था में वेतन लेकर कार्य करता है",

    explanation:
        "Employee वह व्यक्ति होता है जो किसी संस्था या कंपनी में वेतन लेकर कार्य करता है।",

    examTip:
        "Employee और Employer में अंतर अवश्य याद रखें।"
},

{
    id: "ES-M1-004",

    topic: "Career Growth",

    difficulty: "Easy",

    question:
        "सफल Career Growth के लिए क्या आवश्यक है?",

    options: [
        "केवल Technical Skill",
        "केवल Employability Skill",
        "Technical Skill तथा Employability Skill दोनों",
        "केवल अनुभव"
    ],

    answer: "C",

    answerText:
        "Technical Skill तथा Employability Skill दोनों",

    explanation:
        "सफल करियर के लिए तकनीकी ज्ञान के साथ व्यवहारिक कौशल भी आवश्यक हैं।",

    examTip:
        "Technical + Employability Skills = Career Success"
},

{
    id: "ES-M1-005",

    topic: "Growth Mindset",

    difficulty: "Easy",

    question:
        "Growth Mindset वाला व्यक्ति क्या करता है?",

    options: [
        "नई चीज़ें सीखने से बचता है",
        "अपनी गलतियों से सीखता है",
        "प्रयास करना छोड़ देता है",
        "दूसरों को दोष देता है"
    ],

    answer: "B",

    answerText:
        "अपनी गलतियों से सीखता है",

    explanation:
        "Growth Mindset वाला व्यक्ति अपनी गलतियों से सीखकर स्वयं को बेहतर बनाता है।",

    examTip:
        "Learn • Improve • Repeat"
},{
    id: "ES-M1-006",

    topic: "E-Learning",

    difficulty: "Easy",

    question:
        "E-Learning का अर्थ क्या है?",

    options: [
        "केवल Classroom में पढ़ाई",
        "इंटरनेट या डिजिटल माध्यम से सीखना",
        "केवल पुस्तक पढ़ना",
        "केवल परीक्षा देना"
    ],

    answer: "B",

    answerText:
        "इंटरनेट या डिजिटल माध्यम से सीखना",

    explanation:
        "E-Learning में मोबाइल, कंप्यूटर या इंटरनेट के माध्यम से ऑनलाइन शिक्षा प्राप्त की जाती है।",

    examTip:
        "E-Learning = Anywhere + Anytime Learning"
},

{
    id: "ES-M1-007",

    topic: "Online Learning",

    difficulty: "Easy",

    question:
        "ऑनलाइन सीखने का सबसे बड़ा लाभ क्या है?",

    options: [
        "कहीं भी और कभी भी सीख सकते हैं",
        "इंटरनेट की आवश्यकता नहीं होती",
        "परीक्षा नहीं देनी पड़ती",
        "शिक्षक की आवश्यकता नहीं होती"
    ],

    answer: "A",

    answerText:
        "कहीं भी और कभी भी सीख सकते हैं",

    explanation:
        "ऑनलाइन शिक्षा विद्यार्थी को अपनी सुविधा के अनुसार किसी भी समय और स्थान से सीखने की सुविधा देती है।",

    examTip:
        "Flexible Learning इसका सबसे बड़ा लाभ है।"
},

{
    id: "ES-M1-008",

    topic: "Bharat Skills Portal",

    difficulty: "Easy",

    question:
        "भारत सरकार का ITI विद्यार्थियों के लिए प्रमुख E-Learning Portal कौन-सा है?",

    options: [
        "Bharat Skills Portal",
        "IRCTC",
        "GeM",
        "Netflix"
    ],

    answer: "A",

    answerText:
        "Bharat Skills Portal",

    explanation:
        "Bharat Skills Portal पर ITI विद्यार्थियों के लिए अध्ययन सामग्री और E-Learning उपलब्ध है।",

    examTip:
        "Bharat Skills Portal अक्सर CBT में पूछा जाता है।"
},

{
    id: "ES-M1-009",

    topic: "Upskilling",

    difficulty: "Medium",

    question:
        "Upskilling का अर्थ क्या है?",

    options: [
        "नौकरी छोड़ना",
        "नई या उन्नत Skills सीखना",
        "केवल Certificate लेना",
        "Promotion पाना"
    ],

    answer: "B",

    answerText:
        "नई या उन्नत Skills सीखना",

    explanation:
        "नई तकनीकों और आधुनिक कार्य प्रणाली के अनुसार अपने कौशल को बेहतर बनाना Upskilling कहलाता है।",

    examTip:
        "Upskilling = Improve Existing Skills"
},

{
    id: "ES-M1-010",

    topic: "Digital Skills",

    difficulty: "Easy",

    question:
        "आज अधिकांश नौकरियों में कौन-सा कौशल आवश्यक माना जाता है?",

    options: [
        "अभिनय कौशल",
        "डिजिटल कौशल",
        "नृत्य कौशल",
        "संगीत कौशल"
    ],

    answer: "B",

    answerText:
        "डिजिटल कौशल",

    explanation:
        "लगभग सभी आधुनिक कार्यस्थलों पर कंप्यूटर और डिजिटल तकनीकों का उपयोग होता है।",

    examTip:
        "Digital Skills = Future Ready Skills"
  {
    id: "ES-M1-011",

    topic: "Future of Work",

    difficulty: "Easy",

    question:
        "Future of Work का क्या अर्थ है?",

    options: [
        "केवल सरकारी नौकरी",
        "भविष्य में कार्य करने के बदलते तरीके और नई तकनीकें",
        "केवल फैक्ट्री में कार्य करना",
        "केवल कृषि कार्य"
    ],

    answer: "B",

    answerText:
        "भविष्य में कार्य करने के बदलते तरीके और नई तकनीकें",

    explanation:
        "नई तकनीकों, ऑटोमेशन, AI और डिजिटल बदलावों के कारण कार्य करने के तरीके लगातार बदल रहे हैं।",

    examTip:
        "Future of Work = Technology + Automation + AI"
},

{
    id: "ES-M1-012",

    topic: "Green Jobs",

    difficulty: "Easy",

    question:
        "Green Job का मुख्य उद्देश्य क्या है?",

    options: [
        "अधिक वेतन कमाना",
        "पर्यावरण संरक्षण और सतत विकास",
        "केवल सरकारी नौकरी",
        "विदेश में रोजगार"
    ],

    answer: "B",

    answerText:
        "पर्यावरण संरक्षण और सतत विकास",

    explanation:
        "Green Jobs ऐसे कार्य हैं जो पर्यावरण की रक्षा करते हैं और प्राकृतिक संसाधनों का संरक्षण करते हैं।",

    examTip:
        "Green Job = Environment Friendly Job"
},

{
    id: "ES-M1-013",

    topic: "Green Jobs",

    difficulty: "Medium",

    question:
        "निम्नलिखित में से कौन-सा Green Job का उदाहरण है?",

    options: [
        "Solar Panel Technician",
        "Wind Energy Technician",
        "Waste Management Expert",
        "उपरोक्त सभी"
    ],

    answer: "D",

    answerText:
        "उपरोक्त सभी",

    explanation:
        "Renewable Energy तथा Waste Management से जुड़े सभी कार्य Green Jobs माने जाते हैं।",

    examTip:
        "Solar + Wind + Waste = Green Jobs"
},

{
    id: "ES-M1-014",

    topic: "Digital Skills",

    difficulty: "Easy",

    question:
        "Digital Skills क्यों आवश्यक हैं?",

    options: [
        "केवल मोबाइल चलाने के लिए",
        "क्योंकि अधिकांश कार्यस्थलों पर डिजिटल तकनीक का उपयोग होता है",
        "केवल गेम खेलने के लिए",
        "केवल सोशल मीडिया के लिए"
    ],

    answer: "B",

    answerText:
        "क्योंकि अधिकांश कार्यस्थलों पर डिजिटल तकनीक का उपयोग होता है",

    explanation:
        "आज लगभग सभी क्षेत्रों में कंप्यूटर, इंटरनेट और डिजिटल एप्लिकेशन का उपयोग किया जाता है।",

    examTip:
        "Digital Skills = Employability Skills का महत्वपूर्ण भाग"
},

{
    id: "ES-M1-015",

    topic: "Upskilling",

    difficulty: "Medium",

    question:
        "यदि कोई कर्मचारी नई मशीन चलाना सीखता है, तो इसे क्या कहा जाएगा?",

    options: [
        "Promotion",
        "Upskilling",
        "Retirement",
        "Transfer"
    ],

    answer: "B",

    answerText:
        "Upskilling",

    explanation:
        "नई तकनीक या मशीन सीखकर अपनी कार्यक्षमता बढ़ाना Upskilling कहलाता है।",

    examTip:
        "नई Skill सीखना = Upskilling"
},
},
{
    id: "ES-M1-016",

    topic: "Reskilling",

    difficulty: "Medium",

    question:
        "Reskilling का अर्थ क्या है?",

    options: [
        "नई नौकरी के लिए नई Skill सीखना",
        "नौकरी छोड़ देना",
        "केवल Certificate लेना",
        "Promotion पाना"
    ],

    answer: "A",

    answerText:
        "नई नौकरी के लिए नई Skill सीखना",

    explanation:
        "जब किसी व्यक्ति को बदलती तकनीक या नए कार्य के लिए नई Skills सीखनी पड़ती हैं, तो उसे Reskilling कहते हैं।",

    examTip:
        "Reskilling = Learn New Skills"
},

{
    id: "ES-M1-017",

    topic: "Lifelong Learning",

    difficulty: "Easy",

    question:
        "Lifelong Learning का क्या अर्थ है?",

    options: [
        "केवल स्कूल तक पढ़ाई",
        "जीवनभर नई बातें सीखते रहना",
        "केवल कॉलेज की शिक्षा",
        "केवल परीक्षा देना"
    ],

    answer: "B",

    answerText:
        "जीवनभर नई बातें सीखते रहना",

    explanation:
        "नई तकनीकों और बदलते कार्यक्षेत्र के अनुसार लगातार सीखते रहना Lifelong Learning कहलाता है।",

    examTip:
        "Never Stop Learning."
},

{
    id: "ES-M1-018",

    topic: "Self Learning",

    difficulty: "Easy",

    question:
        "निम्नलिखित में से Self Learning का उदाहरण कौन-सा है?",

    options: [
        "केवल शिक्षक पर निर्भर रहना",
        "ऑनलाइन Course देखकर स्वयं सीखना",
        "पढ़ाई छोड़ देना",
        "केवल परीक्षा देना"
    ],

    answer: "B",

    answerText:
        "ऑनलाइन Course देखकर स्वयं सीखना",

    explanation:
        "स्वयं प्रयास करके पुस्तक, वीडियो या ऑनलाइन Course से सीखना Self Learning कहलाता है।",

    examTip:
        "Self Learning = Self Improvement"
},

{
    id: "ES-M1-019",

    topic: "Professional Behaviour",

    difficulty: "Easy",

    question:
        "अच्छे Professional Behaviour का उदाहरण कौन-सा है?",

    options: [
        "समय पर कार्यालय पहुँचना",
        "कार्य समय पर पूरा करना",
        "सभी के साथ सम्मानपूर्वक व्यवहार करना",
        "उपरोक्त सभी"
    ],

    answer: "D",

    answerText:
        "उपरोक्त सभी",

    explanation:
        "Professional Behaviour में अनुशासन, समय की पाबंदी, सम्मान और जिम्मेदारी शामिल हैं।",

    examTip:
        "Professional = Punctual + Responsible + Respectful"
},

{
    id: "ES-M1-020",

    topic: "Continuous Learning",

    difficulty: "Medium",

    question:
        "यदि कोई ITI विद्यार्थी प्रतिदिन नई Trade Videos देखकर अभ्यास करता है, तो यह किसका उदाहरण है?",

    options: [
        "आलस्य",
        "Continuous Learning",
        "समय की बर्बादी",
        "अनुशासनहीनता"
    ],

    answer: "B",

    answerText:
        "Continuous Learning",

    explanation:
        "नियमित रूप से नया ज्ञान प्राप्त करना और स्वयं को बेहतर बनाना Continuous Learning कहलाता है।",

    examTip:
        "Learn Every Day."

},
{
    id: "ES-M1-021",

    topic: "Lifelong Learning",

    difficulty: "Easy",

    question:
        "राहुल ने ITI पूरी करने के बाद भी ऑनलाइन नए-नए कोर्स करना जारी रखा। यह किसका उदाहरण है?",

    options: [
        "समय की बर्बादी",
        "Lifelong Learning",
        "बेरोजगारी",
        "अवकाश"
    ],

    answer: "B",

    answerText:
        "Lifelong Learning",

    explanation:
        "नई तकनीकों और बदलती नौकरी की आवश्यकताओं के अनुसार लगातार सीखते रहना Lifelong Learning कहलाता है।",

    examTip:
        "Learning Never Stops."
},

{
    id: "ES-M1-022",

    topic: "Training",

    difficulty: "Easy",

    question:
        "यदि किसी कर्मचारी को नई मशीन पर काम करने का प्रशिक्षण दिया जाए, तो उसका मुख्य उद्देश्य क्या है?",

    options: [
        "समय बिताना",
        "कार्यक्षमता बढ़ाना",
        "नौकरी बदलना",
        "छुट्टी देना"
    ],

    answer: "B",

    answerText:
        "कार्यक्षमता बढ़ाना",

    explanation:
        "नई तकनीक का प्रशिक्षण कर्मचारी की दक्षता बढ़ाता है और उसे आधुनिक कार्यस्थल के लिए तैयार करता है।",

    examTip:
        "Training = Better Performance"
},

{
    id: "ES-M1-023",

    topic: "Career Growth",

    difficulty: "Easy",

    question:
        "आज के समय में नौकरी पाने के लिए सबसे महत्वपूर्ण क्या है?",

    options: [
        "केवल डिग्री",
        "केवल अनुभव",
        "Technical Skills तथा Employability Skills दोनों",
        "केवल अंग्रेज़ी बोलना"
    ],

    answer: "C",

    answerText:
        "Technical Skills तथा Employability Skills दोनों",

    explanation:
        "आज कंपनियाँ ऐसे उम्मीदवार चाहती हैं जिनके पास तकनीकी ज्ञान के साथ अच्छा व्यवहार और समस्या समाधान की क्षमता भी हो।",

    examTip:
        "Skill + Behaviour = Selection"
},

{
    id: "ES-M1-024",

    topic: "Bharat Skills Portal",

    difficulty: "Easy",

    question:
        "यदि कोई विद्यार्थी Bharat Skills Portal का उपयोग करता है, तो उसे मुख्य रूप से क्या लाभ मिलेगा?",

    options: [
        "मनोरंजन",
        "कौशल विकास एवं ऑनलाइन अध्ययन",
        "ऑनलाइन गेम",
        "सोशल मीडिया"
    ],

    answer: "B",

    answerText:
        "कौशल विकास एवं ऑनलाइन अध्ययन",

    explanation:
        "Bharat Skills Portal पर ITI विद्यार्थियों के लिए अध्ययन सामग्री और कौशल विकास के संसाधन उपलब्ध हैं।",

    examTip:
        "Bharat Skills = DGT Official Learning Platform"
},

{
    id: "ES-M1-025",

    topic: "Employability Skills",

    difficulty: "Easy",

    question:
        "निम्न में से कौन Employability Skill नहीं है?",

    options: [
        "Communication Skill",
        "Teamwork",
        "Problem Solving",
        "केवल खेल खेलना"
    ],

    answer: "D",

    answerText:
        "केवल खेल खेलना",

    explanation:
        "Communication, Teamwork और Problem Solving Employability Skills हैं, जबकि केवल खेल खेलना Employability Skill नहीं माना जाता।",

    examTip:
        "Employability Skills = Workplace Skills"
},

{
    id: "ES-M1-026",

    topic: "Time Management",

    difficulty: "Easy",

    question:
        "सीमा प्रतिदिन अपने कार्यों की सूची बनाकर उसी क्रम में कार्य करती है। यह किस Skill का उदाहरण है?",

    options: [
        "Time Management",
        "Drawing Skill",
        "Sports Skill",
        "Music Skill"
    ],

    answer: "A",

    answerText:
        "Time Management",

    explanation:
        "कार्यों की योजना बनाकर समय पर पूरा करना Time Management कहलाता है।",

    examTip:
        "Plan → Work → Finish"
},

{
    id: "ES-M1-027",

    topic: "Growth Mindset",

    difficulty: "Medium",

    question:
        "यदि किसी कार्य में गलती हो जाए तो सबसे उचित कदम क्या है?",

    options: [
        "दूसरों को दोष देना",
        "गलती स्वीकार कर उससे सीखना",
        "कार्य छोड़ देना",
        "गलती छिपाना"
    ],

    answer: "B",

    answerText:
        "गलती स्वीकार कर उससे सीखना",

    explanation:
        "गलतियों से सीखना Growth Mindset का महत्वपूर्ण गुण है।",

    examTip:
        "Mistakes are Learning Opportunities."
},

{
    id: "ES-M1-028",

    topic: "Technology",

    difficulty: "Easy",

    question:
        "नई तकनीकों के बारे में जानकारी रखने का सबसे बड़ा लाभ क्या है?",

    options: [
        "समय की बर्बादी",
        "रोजगार के अवसर बढ़ते हैं",
        "केवल मनोरंजन",
        "कोई लाभ नहीं"
    ],

    answer: "B",

    answerText:
        "रोजगार के अवसर बढ़ते हैं",

    explanation:
        "नई तकनीकों का ज्ञान व्यक्ति को अधिक योग्य बनाता है और रोजगार के अवसर बढ़ाता है।",

    examTip:
        "Technology = More Opportunities"
},

{
    id: "ES-M1-029",

    topic: "Communication Skills",

    difficulty: "Medium",

    question:
        "Communication Skill सुधारने का सबसे अच्छा तरीका क्या है?",

    options: [
        "लोगों से बात करना बंद कर देना",
        "नियमित अभ्यास और प्रभावी संवाद करना",
        "केवल समाचार पढ़ना",
        "केवल परीक्षा देना"
    ],

    answer: "B",

    answerText:
        "नियमित अभ्यास और प्रभावी संवाद करना",

    explanation:
        "Communication Skill अभ्यास, सुनने की क्षमता और स्पष्ट अभिव्यक्ति से विकसित होती है।",

    examTip:
        "Practice Makes Better Communication."
},

{
    id: "ES-M1-030",

    topic: "Employability Skills",

    difficulty: "Easy",

    question:
        "Employability Skills सीखने का सबसे बड़ा लाभ क्या है?",

    options: [
        "केवल प्रमाणपत्र प्राप्त करना",
        "बेहतर रोजगार और सफल करियर",
        "केवल मोबाइल चलाना",
        "केवल परीक्षा पास करना"
    ],

    answer: "B",

    answerText:
        "बेहतर रोजगार और सफल करियर",

    explanation:
        "Employability Skills व्यक्ति की रोजगार क्षमता, कार्यकुशलता और करियर विकास को बढ़ाती हैं।",

    examTip:
        "Employability Skills = Long-Term Career Success"
},
  {
    id: "ES-M1-031",

    module: "Module 1",

    topic: "Career Growth",

    keywords: ["career","technical skill","employability"],

    difficulty: "Easy",

    question:
        "किसी कंपनी में चयन के समय उम्मीदवार की कौन-सी विशेषता सबसे अधिक देखी जाती है?",

    options: [
        "केवल अंक",
        "केवल आयु",
        "Technical Skills तथा Employability Skills",
        "केवल पहचान"
    ],

    answer: "C",

    answerText:
        "Technical Skills तथा Employability Skills",

    explanation:
        "आज अधिकांश कंपनियाँ ऐसे उम्मीदवारों को प्राथमिकता देती हैं जिनके पास तकनीकी ज्ञान के साथ अच्छा व्यवहार और संचार कौशल हो।",

    examTip:
        "Interview में केवल Technical Knowledge नहीं बल्कि Behaviour भी देखा जाता।"
},

{
    id: "ES-M1-032",

    module: "Module 1",

    topic: "Technology",

    keywords: ["technology","learning","future"],

    difficulty: "Medium",

    question:
        "यदि किसी कर्मचारी को नई तकनीक सीखने में रुचि नहीं है, तो उसका क्या नुकसान हो सकता है?",

    options: [
        "कोई प्रभाव नहीं पड़ेगा",
        "रोजगार के अवसर कम हो सकते हैं",
        "वेतन बढ़ जाएगा",
        "तुरंत पदोन्नति मिलेगी"
    ],

    answer: "B",

    answerText:
        "रोजगार के अवसर कम हो सकते हैं",

    explanation:
        "बदलती तकनीक के साथ स्वयं को अपडेट न करने पर भविष्य में रोजगार के अवसर कम हो सकते हैं।",

    examTip:
        "Technology बदलती रहती है, इसलिए Learning भी जारी रखें।"
},

{
    id: "ES-M1-033",

    module: "Module 1",

    topic: "Growth Mindset",

    keywords: ["growth","mindset","learning"],

    difficulty: "Easy",

    question:
        "कौन-सा व्यक्ति Growth Mindset का उदाहरण है?",

    options: [
        "जो कहता है मैं कभी नहीं सीख सकता",
        "जो नई चुनौतियों से बचता है",
        "जो लगातार सीखने और सुधार करने का प्रयास करता है",
        "जो दूसरों को दोष देता है"
    ],

    answer: "C",

    answerText:
        "जो लगातार सीखने और सुधार करने का प्रयास करता है",

    explanation:
        "Growth Mindset वाला व्यक्ति कठिनाइयों को सीखने का अवसर मानता है।",

    examTip:
        "Growth Mindset = Learn + Improve + Practice"
},

{
    id: "ES-M1-034",

    module: "Module 1",

    topic: "E-Learning",

    keywords: ["online","learning","digital"],

    difficulty: "Easy",

    question:
        "Online Learning का सबसे बड़ा लाभ क्या है?",

    options: [
        "कहीं भी और कभी भी सीखना",
        "इंटरनेट की आवश्यकता नहीं होती",
        "परीक्षा नहीं होती",
        "शिक्षक की आवश्यकता नहीं होती"
    ],

    answer: "A",

    answerText:
        "कहीं भी और कभी भी सीखना",

    explanation:
        "Online Learning समय और स्थान की स्वतंत्रता प्रदान करती है।",

    examTip:
        "Anywhere + Anytime = Online Learning"
},

{
    id: "ES-M1-035",

    module: "Module 1",

    topic: "Bharat Skills Portal",

    keywords: ["bharat skills","portal","online"],

    difficulty: "Medium",

    question:
        "अजय ITI के बाद प्रतिदिन Bharat Skills Portal पर नया Course करता है। इससे उसे सबसे अधिक क्या लाभ मिलेगा?",

    options: [
        "मनोरंजन",
        "नई Skills सीखकर रोजगार क्षमता बढ़ेगी",
        "परीक्षा से छुट्टी मिलेगी",
        "कोई लाभ नहीं"
    ],

    answer: "B",

    answerText:
        "नई Skills सीखकर रोजगार क्षमता बढ़ेगी",

    explanation:
        "नियमित रूप से नई Skills सीखने से व्यक्ति आधुनिक उद्योगों की आवश्यकताओं के अनुरूप तैयार होता है।",

    examTip:
        "Continuous Learning = Better Career"
},
  {
    id: "ES-M1-036",

    module: "Module 1",

    topic: "Professional Behaviour",

    keywords: ["professional","behaviour","discipline"],

    difficulty: "Easy",

    question:
        "निम्नलिखित में से कौन-सा व्यवहार Professional माना जाएगा?",

    options: [
        "समय पर कार्यालय पहुँचना",
        "कार्य समय पर पूरा करना",
        "सभी के साथ सम्मानपूर्वक व्यवहार करना",
        "उपरोक्त सभी"
    ],

    answer: "D",

    answerText:
        "उपरोक्त सभी",

    explanation:
        "Professional Behaviour में अनुशासन, समय की पाबंदी, ईमानदारी और सहयोगात्मक व्यवहार शामिल हैं।",

    examTip:
        "Professional Employee = Punctual + Honest + Responsible"
},

{
    id: "ES-M1-037",

    module: "Module 1",

    topic: "Self Learning",

    keywords: ["self learning","online","practice"],

    difficulty: "Easy",

    question:
        "Self Learning का सबसे अच्छा उदाहरण कौन-सा है?",

    options: [
        "केवल Trainer पर निर्भर रहना",
        "YouTube और Online Course से स्वयं सीखना",
        "पढ़ाई छोड़ देना",
        "केवल परीक्षा देना"
    ],

    answer: "B",

    answerText:
        "YouTube और Online Course से स्वयं सीखना",

    explanation:
        "स्वयं प्रयास करके डिजिटल माध्यमों से सीखना Self Learning कहलाता है।",

    examTip:
        "Learn Yourself = Self Learning"
},

{
    id: "ES-M1-038",

    module: "Module 1",

    topic: "Employability Skills",

    keywords: ["learning","employability","skill"],

    difficulty: "Easy",

    question:
        "Employability Skills विकसित करने के लिए सबसे आवश्यक गुण कौन-सा है?",

    options: [
        "सीखने की इच्छा",
        "आलस्य",
        "समय की बर्बादी",
        "लापरवाही"
    ],

    answer: "A",

    answerText:
        "सीखने की इच्छा",

    explanation:
        "नई Skills सीखने की इच्छा व्यक्ति को सफल Professional बनने में सहायता करती है।",

    examTip:
        "Positive Attitude = Better Employability"
},

{
    id: "ES-M1-039",

    module: "Module 1",

    topic: "Technical Skills",

    keywords: ["technical","employability","career"],

    difficulty: "Easy",

    question:
        "निम्न में से कौन-सा कथन सही है?",

    options: [
        "केवल Technical Skill से सफलता मिलती है",
        "केवल Employability Skill से सफलता मिलती है",
        "Technical Skill तथा Employability Skill दोनों आवश्यक हैं",
        "किसी Skill की आवश्यकता नहीं होती"
    ],

    answer: "C",

    answerText:
        "Technical Skill तथा Employability Skill दोनों आवश्यक हैं",

    explanation:
        "सफल Career के लिए तकनीकी दक्षता तथा व्यवहारिक कौशल दोनों आवश्यक हैं।",

    examTip:
        "Technical + Behaviour = Success"
},

{
    id: "ES-M1-040",

    module: "Module 1",

    topic: "Career Development",

    keywords: ["career","job","professional"],

    difficulty: "Easy",

    question:
        "Employability Skills सीखने का अंतिम उद्देश्य क्या है?",

    options: [
        "केवल प्रमाणपत्र प्राप्त करना",
        "केवल परीक्षा उत्तीर्ण करना",
        "बेहतर रोजगार, उत्कृष्ट कार्य प्रदर्शन और सफल करियर बनाना",
        "केवल कंप्यूटर चलाना"
    ],

    answer: "C",

    answerText:
        "बेहतर रोजगार, उत्कृष्ट कार्य प्रदर्शन और सफल करियर बनाना",

    explanation:
        "Employability Skills व्यक्ति को नौकरी पाने, कार्यस्थल पर अच्छा प्रदर्शन करने और दीर्घकालीन करियर विकास के लिए तैयार करती हैं।",

    examTip:
        "Employability Skills = Job + Performance + Career"
},
{
    id: "ES-M1-041",

    module: "Module 1",

    topic: "Employability Skills",

    keywords: ["employment","career","skills"],

    difficulty: "Easy",

    question:
        "Employability Skills सीखने का सबसे महत्वपूर्ण लाभ क्या है?",

    options: [
        "केवल वेतन बढ़ना",
        "केवल प्रमाणपत्र प्राप्त करना",
        "रोजगार प्राप्त करने और कार्यस्थल पर बेहतर प्रदर्शन करने की क्षमता बढ़ाना",
        "केवल परीक्षा पास करना"
    ],

    answer: "C",

    answerText:
        "रोजगार प्राप्त करने और कार्यस्थल पर बेहतर प्रदर्शन करने की क्षमता बढ़ाना",

    explanation:
        "Employability Skills व्यक्ति को नौकरी पाने, कार्यस्थल पर बेहतर प्रदर्शन करने तथा करियर में आगे बढ़ने में सहायता करती हैं।",

    examTip:
        "Employability Skills = Job + Performance + Career Growth"
},

{
    id: "ES-M1-042",

    module: "Module 1",

    topic: "Upskilling",

    keywords: ["training","machine","upskilling"],

    difficulty: "Easy",

    question:
        "यदि किसी कंपनी में नई मशीनें लगाई जाती हैं, तो कर्मचारियों को सबसे पहले क्या करना चाहिए?",

    options: [
        "नौकरी छोड़ देना",
        "नई मशीनों का प्रशिक्षण लेना",
        "विरोध करना",
        "मशीनों का उपयोग न करना"
    ],

    answer: "B",

    answerText:
        "नई मशीनों का प्रशिक्षण लेना",

    explanation:
        "नई तकनीक के अनुसार प्रशिक्षण लेना Up-skilling का महत्वपूर्ण भाग है।",

    examTip:
        "नई मशीन = नया प्रशिक्षण"
},

{
    id: "ES-M1-043",

    module: "Module 1",

    topic: "Employability Skills",

    keywords: ["importance","employment","skills"],

    difficulty: "Easy",

    question:
        "निम्नलिखित में से कौन-सा कथन सही है?",

    options: [
        "Employability Skills केवल ITI विद्यार्थियों के लिए हैं",
        "Employability Skills सभी प्रकार के रोजगार के लिए उपयोगी हैं",
        "Employability Skills केवल सरकारी कर्मचारियों के लिए हैं",
        "Employability Skills की आवश्यकता नहीं होती"
    ],

    answer: "B",

    answerText:
        "Employability Skills सभी प्रकार के रोजगार के लिए उपयोगी हैं",

    explanation:
        "चाहे सरकारी नौकरी हो, निजी क्षेत्र हो या स्वरोजगार, Employability Skills सभी जगह उपयोगी हैं।",

    examTip:
        "Employability Skills सभी Professionals के लिए आवश्यक हैं।"
},

{
    id: "ES-M1-044",

    module: "Module 1",

    topic: "Learning",

    keywords: ["practice","technology","learning"],

    difficulty: "Medium",

    question:
        "किसी कर्मचारी को नई तकनीक सीखने में कठिनाई आती है। सबसे अच्छा समाधान क्या है?",

    options: [
        "सीखना बंद कर दे",
        "अभ्यास करे और प्रशिक्षण ले",
        "नौकरी छोड़ दे",
        "दूसरों पर निर्भर रहे"
    ],

    answer: "B",

    answerText:
        "अभ्यास करे और प्रशिक्षण ले",

    explanation:
        "लगातार अभ्यास और उचित प्रशिक्षण से नई तकनीक आसानी से सीखी जा सकती है।",

    examTip:
        "Practice + Training = Success"
},

{
    id: "ES-M1-045",

    module: "Module 1",

    topic: "Career Growth",

    keywords: ["career","growth","development"],

    difficulty: "Easy",

    question:
        "Career Growth में सबसे अधिक सहायता किससे मिलती है?",

    options: [
        "नई Skills सीखना",
        "समय का सही उपयोग",
        "सकारात्मक सोच",
        "उपरोक्त सभी"
    ],

    answer: "D",

    answerText:
        "उपरोक्त सभी",

     explanation:
        "Career Growth के लिए नई Skills, Time Management और Positive Attitude तीनों आवश्यक हैं।",

    examTip:
        "Learn + Manage Time + Positive Thinking = Career Growth"
},
  {
    id: "ES-M1-046",

    module: "Module 1",

    topic: "Lifelong Learning",

    keywords: ["learning","online","career"],

    difficulty: "Medium",

    question:
        "पूजा ने ITI के बाद नौकरी के साथ-साथ हर सप्ताह एक Online Course करना शुरू किया। यह किसका उदाहरण है?",

    options: [
        "समय की बर्बादी",
        "Lifelong Learning",
        "अनुशासनहीनता",
        "बेरोजगारी"
    ],

    answer: "B",

    answerText:
        "Lifelong Learning",

    explanation:
        "नौकरी के साथ लगातार नए कौशल सीखना Lifelong Learning का उत्कृष्ट उदाहरण है।",

    examTip:
        "Learning should continue throughout your career."
},

{
    id: "ES-M1-047",

    module: "Module 1",

    topic: "Professional Behaviour",

    keywords: ["discipline","punctuality","employee"],

    difficulty: "Easy",

    question:
        "यदि कोई कर्मचारी समय पर कार्यालय पहुँचता है और अपना कार्य समय पर पूरा करता है, तो यह किस गुण को दर्शाता है?",

    options: [
        "Professional Behaviour",
        "आलस्य",
        "अनुशासनहीनता",
        "असफलता"
    ],

    answer: "A",

    answerText:
        "Professional Behaviour",

    explanation:
        "समय की पाबंदी, जिम्मेदारी और अनुशासन Professional Behaviour की पहचान हैं।",

    examTip:
        "Punctuality is a key employability skill."
},

{
    id: "ES-M1-048",

    module: "Module 1",

    topic: "Future Skills",

    keywords: ["future","technology","career"],

    difficulty: "Easy",

    question:
        "भविष्य में रोजगार के अवसर बढ़ाने के लिए क्या करना चाहिए?",

    options: [
        "नई Skills सीखते रहना",
        "केवल पुरानी जानकारी पर निर्भर रहना",
        "नई तकनीक से बचना",
        "पढ़ाई छोड़ देना"
    ],

    answer: "A",

    answerText:
        "नई Skills सीखते रहना",

    explanation:
        "बदलती तकनीकों के अनुसार स्वयं को अपडेट रखने से रोजगार के अवसर बढ़ते हैं।",

    examTip:
        "Update Your Skills Regularly."
},

{
    id: "ES-M1-049",

    module: "Module 1",

    topic: "Positive Attitude",

    keywords: ["attitude","success","career"],

    difficulty: "Easy",

    question:
        "यदि किसी व्यक्ति में सीखने की इच्छा, सकारात्मक सोच और मेहनत करने की आदत है, तो उसके सफल होने की संभावना कैसी होगी?",

    options: [
        "कम",
        "अधिक",
        "बिल्कुल नहीं",
        "केवल भाग्य पर निर्भर"
    ],

    answer: "B",

    answerText:
        "अधिक",

    explanation:
        "सकारात्मक सोच और लगातार सीखने की आदत व्यक्ति को सफलता की ओर ले जाती है।",

    examTip:
        "Positive Attitude + Hard Work = Success"
},

{
    id: "ES-M1-050",

    module: "Module 1",

    topic: "Employability Skills",

    keywords: ["skills","career","professional"],

    difficulty: "Easy",

    question:
        "निम्नलिखित में से Employability Skills का सबसे उपयुक्त वर्णन कौन-सा है?",

    options: [
        "केवल तकनीकी ज्ञान",
        "केवल संचार कौशल",
        "तकनीकी, व्यवहारिक और व्यावसायिक कौशलों का समन्वय",
        "केवल कंप्यूटर संचालन"
    ],

    answer: "C",

    answerText:
        "तकनीकी, व्यवहारिक और व्यावसायिक कौशलों का समन्वय",

    explanation:
        "Employability Skills में Communication, Teamwork, Digital Skills, Time Management और अन्य Soft Skills शामिल होते हैं।",

    examTip:
        "Technical Skill + Soft Skill = Employability Skill"
},
  {
    id: "ES-M1-051",

    module: "Module 1",

    topic: "Employability Skills",

    keywords: ["employability","practice","career"],

    difficulty: "Easy",

    questionType: "MCQ",

    question:
        "किसी व्यक्ति की Employability बढ़ाने का सबसे अच्छा तरीका क्या है?",

    options: [
        "केवल प्रमाणपत्र एकत्र करना",
        "नई Skills सीखना और उनका नियमित अभ्यास करना",
        "केवल नौकरी की प्रतीक्षा करना",
        "केवल परीक्षा देना"
    ],

    answer: "B",

    answerText:
        "नई Skills सीखना और उनका नियमित अभ्यास करना",

    explanation:
        "रोजगार क्षमता बढ़ाने के लिए केवल प्रमाणपत्र नहीं, बल्कि वास्तविक कौशल सीखना और उनका अभ्यास करना आवश्यक है।",

    examTip:
        "Practice improves Employability."
},

{
    id: "ES-M1-052",

    module: "Module 1",

    topic: "Employability Skills",

    keywords: ["employee","entrepreneur","skills"],

    difficulty: "Easy",

    questionType: "MCQ",

    question:
        "Employability Skills का लाभ किसे मिलता है?",

    options: [
        "केवल ITI विद्यार्थियों को",
        "केवल इंजीनियरों को",
        "सभी विद्यार्थियों, कर्मचारियों और उद्यमियों को",
        "केवल सरकारी कर्मचारियों को"
    ],

    answer: "C",

    answerText:
        "सभी विद्यार्थियों, कर्मचारियों और उद्यमियों को",

    explanation:
        "Employability Skills प्रत्येक व्यक्ति के लिए उपयोगी हैं, चाहे वह नौकरी करे या स्वयं का व्यवसाय।",

    examTip:
        "Employability Skills are useful for everyone."
},

{
    id: "ES-M1-053",

    module: "Module 1",

    topic: "Continuous Learning",

    keywords: ["learning","practice","development"],

    difficulty: "Medium",

    questionType: "Scenario",

    question:
        "यदि कोई विद्यार्थी प्रतिदिन 30 मिनट नई तकनीक सीखने में लगाता है, तो यह किसका उदाहरण है?",

    options: [
        "Time Management",
        "Continuous Learning",
        "Self Improvement",
        "उपरोक्त सभी"
    ],

    answer: "D",

    answerText:
        "उपरोक्त सभी",

    explanation:
        "नियमित अध्ययन से समय प्रबंधन, निरंतर सीखना और आत्म-विकास—तीनों विकसित होते हैं।",

    examTip:
        "Daily learning builds strong skills."
},

{
    id: "ES-M1-054",

    module: "Module 1",

    topic: "Growth Mindset",

    keywords: ["growth","mindset","attitude"],

    difficulty: "Easy",

    questionType: "MCQ",

    question:
        "कौन-सा व्यवहार Growth Mindset को दर्शाता है?",

    options: [
        "मुझसे यह नहीं होगा",
        "मैं अभ्यास करके सीख सकता हूँ",
        "नई चीज़ें सीखना समय की बर्बादी है",
        "गलती होने पर मैं प्रयास छोड़ दूँगा"
    ],

    answer: "B",

    answerText:
        "मैं अभ्यास करके सीख सकता हूँ",

    explanation:
        "Growth Mindset वाला व्यक्ति मानता है कि मेहनत और अभ्यास से क्षमता विकसित की जा सकती है।",

    examTip:
        "Growth Mindset = Believe + Practice + Improve."
},

{
    id: "ES-M1-055",

    module: "Module 1",

    topic: "Professional Development",

    keywords: ["training","cnc","technology"],

    difficulty: "Medium",

    questionType: "Case Study",

    question:
        "रोहित को नई CNC मशीन पर काम करने का अवसर मिला। उसने प्रशिक्षण लिया और अभ्यास किया। इससे कौन-सी Employability Skill प्रदर्शित होती है?",

    options: [
        "सीखने की इच्छा",
        "नई तकनीक अपनाने की क्षमता",
        "Professional Development",
        "उपरोक्त सभी"
    ],

    answer: "D",

    answerText:
        "उपरोक्त सभी",

    explanation:
        "नई तकनीक सीखने के लिए प्रशिक्षण लेना और अभ्यास करना सफल कर्मचारी की पहचान है।",

    examTip:
        "Training + Practice = Professional Growth."
},
 {
    id: "ES-M1-056",

    module: "Module 1",

    topic: "Industry Expectations",

    keywords: ["industry","skills","attitude"],

    difficulty: "Easy",

    questionType: "MCQ",

    question:
        "आज के उद्योगों में सबसे अधिक महत्व किसे दिया जाता है?",

    options: [
        "केवल शारीरिक शक्ति",
        "केवल अनुभव",
        "Skills, Attitude और Learning Ability",
        "केवल आयु"
    ],

    answer: "C",

    answerText:
        "Skills, Attitude और Learning Ability",

    explanation:
        "आधुनिक उद्योग तकनीकी ज्ञान के साथ सकारात्मक दृष्टिकोण और नई चीजें सीखने की क्षमता को भी महत्व देते हैं।",

    examTip:
        "Industry = Skill + Attitude + Learning"
},

{
    id: "ES-M1-057",

    module: "Module 1",

    topic: "Time Management",

    keywords: ["time","management","discipline"],

    difficulty: "Easy",

    questionType: "MCQ",

    question:
        "यदि कोई कर्मचारी समय पर कार्य पूरा नहीं करता, तो सबसे अधिक कौन-सी Skill प्रभावित होती है?",

    options: [
        "Time Management",
        "Drawing Skill",
        "Sports Skill",
        "Music Skill"
    ],

    answer: "A",

    answerText:
        "Time Management",

    explanation:
        "समय का सही उपयोग न करने से कार्य की गुणवत्ता और विश्वसनीयता दोनों प्रभावित होती हैं।",

    examTip:
        "Time Management = Productivity"
},

{
    id: "ES-M1-058",

    module: "Module 1",

    topic: "Online Learning",

    keywords: ["bharat skills","swayam","diksha"],

    difficulty: "Medium",

    questionType: "MCQ",

    question:
        "निम्नलिखित में से कौन-सा Online Learning Platform का उदाहरण है?",

    options: [
        "Bharat Skills Portal",
        "SWAYAM",
        "DIKSHA",
        "उपरोक्त सभी"
    ],

    answer: "D",

    answerText:
        "उपरोक्त सभी",

    explanation:
        "भारत में Bharat Skills, SWAYAM और DIKSHA जैसे कई सरकारी ऑनलाइन शिक्षण प्लेटफ़ॉर्म उपलब्ध हैं।",

    examTip:
        "इन तीनों प्लेटफ़ॉर्म के नाम परीक्षा के लिए याद रखें।"
},

{
    id: "ES-M1-059",

    module: "Module 1",

    topic: "Self Improvement",

    keywords: ["practice","self assessment","learning"],

    difficulty: "Easy",

    questionType: "MCQ",

    question:
        "Employability Skills विकसित करने के लिए सबसे महत्वपूर्ण आदत कौन-सी है?",

    options: [
        "सीखना बंद करना",
        "नियमित अभ्यास और आत्म-मूल्यांकन",
        "केवल परीक्षा की तैयारी करना",
        "दूसरों पर निर्भर रहना"
    ],

    answer: "B",

    answerText:
        "नियमित अभ्यास और आत्म-मूल्यांकन",

    explanation:
        "निरंतर अभ्यास और अपनी कमियों को पहचानकर सुधार करना Employability Skills का आधार है।",

    examTip:
        "Practice + Self Review = Improvement"
},

{
    id: "ES-M1-060",

    module: "Module 1",

    topic: "Career Development",

    keywords: ["career","professional","growth"],

    difficulty: "Easy",

    questionType: "MCQ",

    question:
        "निम्नलिखित में से कौन-सा कथन सही है?",

    options: [
        "Employability Skills केवल नौकरी पाने तक सीमित हैं",
        "Employability Skills करियर के हर चरण में उपयोगी होती हैं",
        "इनकी आवश्यकता केवल निजी क्षेत्र में होती है",
        "इनका तकनीकी शिक्षा से कोई संबंध नहीं है"
    ],

    answer: "B",

    answerText:
        "Employability Skills करियर के हर चरण में उपयोगी होती हैं",

    explanation:
        "Employability Skills नौकरी प्राप्त करने, कार्यस्थल पर सफलता और भविष्य में पदोन्नति—तीनों के लिए महत्वपूर्ण हैं।",

    examTip:
        "Employability Skills = Lifetime Career Skills"
},
  {
    id: "ES-M1-061",

    module: "Module 1",

    topic: "Employability Skills",

    keywords: ["employment","career","success"],

    difficulty: "Easy",

    questionType: "MCQ",

    question:
        "Employability Skills का विकास मुख्य रूप से किसके लिए किया जाता है?",

    options: [
        "केवल परीक्षा पास करने के लिए",
        "केवल प्रमाणपत्र प्राप्त करने के लिए",
        "रोजगार प्राप्त करने और कार्यस्थल पर सफल होने के लिए",
        "केवल अंग्रेज़ी सीखने के लिए"
    ],

    answer: "C",

    answerText:
        "रोजगार प्राप्त करने और कार्यस्थल पर सफल होने के लिए",

    explanation:
        "Employability Skills व्यक्ति को नौकरी प्राप्त करने, कार्यस्थल पर बेहतर प्रदर्शन करने और करियर में आगे बढ़ने में सहायता करती हैं।",

    examTip:
        "Employability Skills = Job + Career + Success"
},

{
    id: "ES-M1-062",

    module: "Module 1",

    topic: "Learning Ability",

    keywords: ["learning","attitude","skills"],

    difficulty: "Easy",

    questionType: "MCQ",

    question:
        "नई तकनीक सीखने के लिए सबसे आवश्यक गुण कौन-सा है?",

    options: [
        "जिज्ञासा और सीखने की इच्छा",
        "आलस्य",
        "डर",
        "बहाने बनाना"
    ],

    answer: "A",

    answerText:
        "जिज्ञासा और सीखने की इच्छा",

    explanation:
        "नई तकनीक सीखने के लिए सकारात्मक सोच और सीखने की इच्छा सबसे महत्वपूर्ण होती है।",

    examTip:
        "Always Be Ready to Learn."
},

{
    id: "ES-M1-063",

    module: "Module 1",

    topic: "Technology",

    keywords: ["technology","career","future"],

    difficulty: "Medium",

    questionType: "Scenario",

    question:
        "यदि कोई कर्मचारी नई मशीन सीखने से मना कर देता है, तो भविष्य में क्या प्रभाव पड़ सकता है?",

    options: [
        "कार्यक्षमता बढ़ेगी",
        "रोजगार के अवसर कम हो सकते हैं",
        "तुरंत पदोन्नति मिलेगी",
        "कोई प्रभाव नहीं पड़ेगा"
    ],

    answer: "B",

    answerText:
        "रोजगार के अवसर कम हो सकते हैं",

    explanation:
        "बदलती तकनीक के अनुसार स्वयं को अपडेट न करने पर करियर की प्रगति प्रभावित हो सकती है।",

    examTip:
        "Technology Changes, So Update Yourself."
},

{
    id: "ES-M1-064",

    module: "Module 1",

    topic: "Professional Behaviour",

    keywords: ["employee","professional","discipline"],

    difficulty: "Easy",

    questionType: "MCQ",

    question:
        "कौन-सा व्यक्ति Employability Skills का अच्छा उदाहरण है?",

    options: [
        "जो समय पर कार्य करता है",
        "जो नई Skills सीखता है",
        "जो टीम के साथ मिलकर कार्य करता है",
        "उपरोक्त सभी"
    ],

    answer: "D",

    answerText:
        "उपरोक्त सभी",

    explanation:
        "सफल कर्मचारी में समय की पाबंदी, टीमवर्क, सीखने की इच्छा और जिम्मेदारी जैसे गुण होते हैं।",

    examTip:
        "Professional = Responsible + Team Player"
},

{
    id: "ES-M1-065",

    module: "Module 1",

    topic: "Future Skills",

    keywords: ["future","learning","career"],

    difficulty: "Easy",

    questionType: "MCQ",

    question:
        "वर्तमान समय में सबसे अधिक मूल्यवान कौशल कौन-सा माना जाता है?",

    options: [
        "केवल लिखना",
        "केवल याद करना",
        "सीखते रहने की क्षमता",
        "केवल परीक्षा देना"
    ],

    answer: "C",

    answerText:
        "सीखते रहने की क्षमता",

    explanation:
        "तकनीक तेजी से बदल रही है, इसलिए लगातार सीखते रहना सबसे महत्वपूर्ण कौशल बन गया है।",

    examTip:
        "Learning Ability = Future Success"
},
  {
    id: "ES-M1-066",

    module: "Module 1",

    topic: "Continuous Learning",

    keywords: ["learning","online","self learning"],

    difficulty: "Easy",

    questionType: "Scenario",

    question:
        "यदि कोई विद्यार्थी प्रतिदिन 20 मिनट ऑनलाइन पढ़ाई करता है, तो यह किसका उदाहरण है?",

    options: [
        "Continuous Learning",
        "Time Management",
        "Self Learning",
        "उपरोक्त सभी"
    ],

    answer: "D",

    answerText:
        "उपरोक्त सभी",

    explanation:
        "नियमित ऑनलाइन अध्ययन व्यक्ति में निरंतर सीखने, समय प्रबंधन और आत्म-अध्ययन की आदत विकसित करता है।",

    examTip:
        "Daily Learning Builds Strong Skills."
},

{
    id: "ES-M1-067",

    module: "Module 1",

    topic: "Professional Behaviour",

    keywords: ["employee","discipline","responsibility"],

    difficulty: "Easy",

    questionType: "MCQ",

    question:
        "किसी संगठन में अच्छे Employee की पहचान क्या होती है?",

    options: [
        "जिम्मेदारी निभाना",
        "समय पर कार्य पूरा करना",
        "अनुशासन बनाए रखना",
        "उपरोक्त सभी"
    ],

    answer: "D",

    answerText:
        "उपरोक्त सभी",

    explanation:
        "एक अच्छा कर्मचारी जिम्मेदार, अनुशासित और समय का सम्मान करने वाला होता है।",

    examTip:
        "Responsibility + Discipline = Good Employee"
},

{
    id: "ES-M1-068",

    module: "Module 1",

    topic: "Career Development",

    keywords: ["career","employment","growth"],

    difficulty: "Easy",

    questionType: "MCQ",

    question:
        "Employability Skills सीखने का सबसे बड़ा लाभ क्या है?",

    options: [
        "केवल वेतन बढ़ना",
        "केवल प्रमाणपत्र मिलना",
        "रोजगार और करियर विकास के अवसर बढ़ना",
        "केवल परीक्षा पास करना"
    ],

    answer: "C",

    answerText:
        "रोजगार और करियर विकास के अवसर बढ़ना",

    explanation:
        "Employability Skills व्यक्ति की Professional Value बढ़ाती हैं और Career Growth में सहायता करती हैं।",

    examTip:
        "Better Skills = Better Career"
},

{
    id: "ES-M1-069",

    module: "Module 1",

    topic: "Self Improvement",

    keywords: ["practice","improvement","growth"],

    difficulty: "Easy",

    questionType: "Scenario",

    question:
        "यदि किसी व्यक्ति को अपनी कमजोरी पता चल जाए, तो सबसे अच्छा कदम क्या होगा?",

    options: [
        "हार मान लेना",
        "सुधार के लिए अभ्यास करना",
        "दूसरों को दोष देना",
        "पढ़ाई छोड़ देना"
    ],

    answer: "B",

    answerText:
        "सुधार के लिए अभ्यास करना",

    explanation:
        "आत्म-मूल्यांकन और नियमित अभ्यास व्यक्ति को लगातार बेहतर बनाते हैं।",

    examTip:
        "Know Your Weakness, Improve It."
},

{
    id: "ES-M1-070",

    module: "Module 1",

    topic: "Career Growth",

    keywords: ["career","attitude","skills"],

    difficulty: "Easy",

    questionType: "MCQ",

    question:
        "Career Growth के लिए कौन-सा गुण सबसे महत्वपूर्ण है?",

    options: [
        "सकारात्मक दृष्टिकोण",
        "नई Skills सीखना",
        "मेहनत करना",
        "उपरोक्त सभी"
    ],

    answer: "D",

    answerText:
        "उपरोक्त सभी",

    explanation:
        "सफल करियर के लिए नई Skills, मेहनत और सकारात्मक सोच तीनों आवश्यक हैं।",

    examTip:
        "Learn + Work Hard + Stay Positive"
},
  {
    id: "ES-M1-071",

    module: "Module 1",

    topic: "Future Skills",

    keywords: ["future", "technology", "career"],

    difficulty: "Easy",

    questionType: "MCQ",

    question:
        "भविष्य में रोजगार पाने के लिए कौन-सी आदत सबसे उपयोगी होगी?",

    options: [
        "नई तकनीकों के बारे में सीखना",
        "केवल पुराने तरीकों पर निर्भर रहना",
        "अभ्यास न करना",
        "बदलाव से डरना"
    ],

    answer: "A",

    answerText:
        "नई तकनीकों के बारे में सीखना",

    explanation:
        "बदलती तकनीकों के अनुसार स्वयं को अपडेट रखने वाले उम्मीदवारों की मांग अधिक होती है।",

    examTip:
        "Keep Learning New Technologies."
},

{
    id: "ES-M1-072",

    module: "Module 1",

    topic: "Lifelong Learning",

    keywords: ["learning", "upskilling", "development"],

    difficulty: "Easy",

    questionType: "MCQ",

    question:
        "यदि कोई कर्मचारी अपने ज्ञान को लगातार अपडेट करता है, तो यह किसका उदाहरण है?",

    options: [
        "Upskilling",
        "Lifelong Learning",
        "Self Development",
        "उपरोक्त सभी"
    ],

    answer: "D",

    answerText:
        "उपरोक्त सभी",

    explanation:
        "लगातार सीखना, नए कौशल विकसित करना और स्वयं को बेहतर बनाना Professional Growth का आधार है।",

    examTip:
        "Never Stop Learning."
},

{
    id: "ES-M1-073",

    module: "Module 1",

    topic: "Employability Skills",

    keywords: ["career", "employment", "skills"],

    difficulty: "Easy",

    questionType: "MCQ",

    question:
        "निम्नलिखित में से कौन-सा कथन सही है?",

    options: [
        "Employability Skills केवल नौकरी पाने तक सीमित हैं",
        "Employability Skills पूरे करियर में उपयोगी रहती हैं",
        "इनकी आवश्यकता केवल ITI विद्यार्थियों को होती है",
        "इनका तकनीकी शिक्षा से कोई संबंध नहीं है"
    ],

    answer: "B",

    answerText:
        "Employability Skills पूरे करियर में उपयोगी रहती हैं",

    explanation:
        "Employability Skills नौकरी मिलने के बाद भी पदोन्नति, नेतृत्व और बेहतर प्रदर्शन में सहायता करती हैं।",

    examTip:
        "Employability Skills = Lifetime Skills."
},

{
    id: "ES-M1-074",

    module: "Module 1",

    topic: "Professional Development",

    keywords: ["professional", "technical", "career"],

    difficulty: "Easy",

    questionType: "MCQ",

    question:
        "एक सफल Professional बनने के लिए क्या आवश्यक है?",

    options: [
        "Technical Skills",
        "Employability Skills",
        "सकारात्मक सोच",
        "उपरोक्त सभी"
    ],

    answer: "D",

    answerText:
        "उपरोक्त सभी",

    explanation:
        "एक सफल Professional बनने के लिए तकनीकी ज्ञान, व्यवहारिक कौशल और सकारात्मक सोच तीनों आवश्यक हैं।",

    examTip:
        "Technical + Soft Skills + Attitude = Success."
},

{
    id: "ES-M1-075",

    module: "Module 1",

    topic: "Module Revision",

    keywords: ["revision", "summary", "employability"],

    difficulty: "Easy",

    questionType: "Revision",

    question:
        "Employability Skills का सबसे उपयुक्त सारांश कौन-सा है?",

    options: [
        "केवल नौकरी पाने का माध्यम",
        "केवल Soft Skills",
        "ऐसे कौशलों का समूह जो व्यक्ति को रोजगार, कार्यस्थल और करियर में सफल बनाते हैं",
        "केवल Communication Skills"
    ],

    answer: "C",

    answerText:
        "ऐसे कौशलों का समूह जो व्यक्ति को रोजगार, कार्यस्थल और करियर में सफल बनाते हैं",

    explanation:
        "Employability Skills में Communication, Teamwork, Digital Skills, Time Management, Problem Solving, Professional Behaviour और Lifelong Learning जैसे कौशल शामिल होते हैं।",

    examTip:
        "Module 1 Revision Question"
}

];
  
      
