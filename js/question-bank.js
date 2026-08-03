// ================================================================
// PART 1 - FIRST YEAR (500+ BILINGUAL QUESTIONS)
// EMPLOYABILITY SKILLS - ITI STUDY CENTRE
// ================================================================

const EMPLOYABILITY_BANK = {

  "1st Year": {
    modules: {

      // ---- MODULE 1: Introduction (50 Qs) ----
      "Module 1: Introduction": {
        questions: [
          { qE: "Which of the following is an Employability Skill?", qH: "निम्नलिखित में से कौन सा रोजगार कौशल (Employability Skill) है?", oE: ["Good Interview Skills", "Good Communication Skills", "Digital Skills", "All of these"], oH: ["अच्छे साक्षात्कार कौशल", "अच्छे संचार कौशल", "डिजिटल कौशल", "ये सभी"], c: 3 },
          { qE: "An employee is someone who __________.", qH: "एक कर्मचारी (employee) वह व्यक्ति है जो __________।", oE: ["Goes to school to study", "Does not work", "Works for a salary", "Goes to play"], oH: ["पढ़ाई के लिए स्कूल जाता है", "काम नहीं करता", "वेतन के लिए काम करता है", "खेलने जाता है"], c: 2 },
          { qE: "What are the two types of skills needed for career growth?", qH: "करियर ग्रोथ के लिए कौन से दो प्रकार के कौशल आवश्यक हैं?", oE: ["Hard & Soft Skills", "Cooking & Dancing", "Reading & Writing", "Walking & Running"], oH: ["हार्ड और सॉफ्ट स्किल्स", "कुकिंग और डांसिंग", "पढ़ना और लिखना", "चलना और दौड़ना"], c: 0 },
          { qE: "Gopi is always willing to learn and improve. He has a __________.", qH: "गोपी हमेशा सीखने और सुधार करने को तैयार रहता है। उसके पास __________ है।", oE: ["Fixed mindset", "Certificate", "Growth mindset", "Marksheet"], oH: ["स्थिर मानसिकता", "प्रमाणपत्र", "विकास मानसिकता", "मार्कशीट"], c: 2 },
          { qE: "What are Employability Skills?", qH: "रोजगार कौशल (Employability Skills) क्या हैं?", oE: ["Skills used in sports", "Skills needed to be successfully employed", "Skills for cooking", "Skills for driving"], oH: ["खेलों में उपयोग होने वाले कौशल", "सफलतापूर्वक नौकरी पाने के लिए आवश्यक कौशल", "खाना पकाने के कौशल", "ड्राइविंग कौशल"], c: 1 },
          { qE: "When we learn something online, it is called __________.", qH: "जब हम ऑनलाइन कुछ सीखते हैं, तो उसे __________ कहते हैं।", oE: ["Classroom learning", "Teaching", "E-learning", "Digital marketing"], oH: ["कक्षा शिक्षण", "शिक्षण", "ई-लर्निंग", "डिजिटल मार्केटिंग"], c: 2 },
          { qE: "Which is an advantage of learning online?", qH: "ऑनलाइन सीखने का क्या लाभ है?", oE: ["Learn anytime & anywhere", "No need to study", "No exams", "No teachers"], oH: ["कभी भी और कहीं भी सीखें", "पढ़ाई की आवश्यकता नहीं", "कोई परीक्षा नहीं", "कोई शिक्षक नहीं"], c: 0 },
          { qE: "Which is an e-learning portal?", qH: "कौन सा ई-लर्निंग पोर्टल है?", oE: ["ASEEM", "Bharat Skills Portal", "NAPS portal", "Netflix"], oH: ["एसीम", "भारत स्किल्स पोर्टल", "नैप्स पोर्टल", "नेटफ्लिक्स"], c: 1 },
          { qE: "Ram wants to upgrade his trade skills. What should he do?", qH: "राम अपने ट्रेड कौशल को अपग्रेड करना चाहता है। उसे क्या करना चाहिए?", oE: ["Play sports", "Watch news", "Find online/offline courses", "Quit job"], oH: ["खेल खेलें", "समाचार देखें", "ऑनलाइन/ऑफलाइन कोर्स खोजें", "नौकरी छोड़ें"], c: 2 },
          { qE: "What is the most important thing for e-learning?", qH: "ई-लर्निंग के लिए सबसे महत्वपूर्ण चीज़ क्या है?", oE: ["Book", "Pen", "Mobile/Computer", "Library card"], oH: ["किताब", "पेन", "मोबाइल/कंप्यूटर", "लाइब्रेरी कार्ड"], c: 2 },
          { qE: "What is the first step to becoming a self-learner?", qH: "स्व-शिक्षार्थी बनने का पहला कदम क्या है?", oE: ["Believing you can learn", "Buying books", "Joining a coaching class", "Asking parents"], oH: ["यह विश्वास करना कि आप सीख सकते हैं", "किताबें खरीदना", "कोचिंग क्लास जॉइन करना", "माता-पिता से पूछना"], c: 0 },
          { qE: "A growth mindset person believes __________.", qH: "विकास मानसिकता वाला व्यक्ति __________ मानता है।", oE: ["Mistakes are unacceptable", "Failure is permanent", "Hard work makes you smarter", "Talent is fixed"], oH: ["गलतियाँ अस्वीकार्य हैं", "असफलता स्थायी है", "मेहनत आपको होशियार बनाती है", "प्रतिभा स्थिर है"], c: 2 },
          { qE: "Which is NOT a characteristic of a self-learner?", qH: "स्व-शिक्षार्थी की कौन सी विशेषता नहीं है?", oE: ["Curious", "Takes initiative", "Gives up easily", "Manages time"], oH: ["जिज्ञासु", "पहल करता है", "जल्दी हार मान लेता है", "समय प्रबंधन करता है"], c: 2 },
          { qE: "Learning new skills helps in __________.", qH: "नए कौशल सीखने से __________ में मदद मिलती है।", oE: ["Getting a better job", "Earning more money", "Personal growth", "All of the above"], oH: ["बेहतर नौकरी पाना", "अधिक पैसा कमाना", "व्यक्तिगत विकास", "उपरोक्त सभी"], c: 3 },
          { qE: "What is the main goal of Employability Skills training?", qH: "रोजगार कौशल प्रशिक्षण का मुख्य लक्ष्य क्या है?", oE: ["To make you a doctor", "To prepare you for the workforce", "To teach you cooking", "To make you a pilot"], oH: ["आपको डॉक्टर बनाना", "आपको कार्यबल के लिए तैयार करना", "आपको खाना बनाना सिखाना", "आपको पायलट बनाना"], c: 1 },
          { qE: "Which of these is a soft skill?", qH: "इनमें से कौन सा सॉफ्ट स्किल है?", oE: ["Welding", "Carpentry", "Communication", "Plumbing"], oH: ["वेल्डिंग", "बढ़ईगीरी", "संचार", "प्लंबिंग"], c: 2 },
          { qE: "Hard skills are __________.", qH: "हार्ड स्किल्स __________ हैं।", oE: ["Easy to learn", "Technical skills for a specific job", "Only for managers", "Not important"], oH: ["सीखने में आसान", "एक विशिष्ट नौकरी के लिए तकनीकी कौशल", "केवल प्रबंधकों के लिए", "महत्वपूर्ण नहीं"], c: 1 },
          { qE: "A good employee is always __________.", qH: "एक अच्छा कर्मचारी हमेशा __________ होता है।", oE: ["Lazy", "Punctual", "Rude", "Disrespectful"], oH: ["आलसी", "समय का पाबंद", "अशिष्ट", "अपमानजनक"], c: 1 },
          { qE: "Which helps in problem-solving?", qH: "समस्या-समाधान में क्या मदद करता है?", oE: ["Critical thinking", "Ignoring the problem", "Waiting for others", "Giving up"], oH: ["आलोचनात्मक सोच", "समस्या को अनदेखा करना", "दूसरों की प्रतीक्षा करना", "हार मान लेना"], c: 0 },
          { qE: "Teamwork means __________.", qH: "टीमवर्क का अर्थ __________ है।", oE: ["Working alone", "Working together towards a common goal", "Competing with each other", "Blaming others"], oH: ["अकेले काम करना", "एक सामान्य लक्ष्य की ओर एक साथ काम करना", "एक दूसरे से प्रतिस्पर्धा करना", "दूसरों को दोष देना"], c: 1 },
          { qE: "Digital literacy is important because __________.", qH: "डिजिटल साक्षरता महत्वपूर्ण है क्योंकि __________।", oE: ["It helps in finding jobs", "It makes life easier", "It connects you to the world", "All of the above"], oH: ["इससे नौकरी खोजने में मदद मिलती है", "इससे जीवन आसान हो जाता है", "यह आपको दुनिया से जोड़ता है", "उपरोक्त सभी"], c: 3 },
          { qE: "Financial literacy helps in __________.", qH: "वित्तीय साक्षरता __________ में मदद करती है।", oE: ["Managing money", "Wasting money", "Spending all money", "Avoiding banks"], oH: ["पैसे का प्रबंधन", "पैसे बर्बाद करना", "सारा पैसा खर्च करना", "बैंकों से बचना"], c: 0 },
          { qE: "Which is NOT a fundamental right in India?", qH: "भारत में कौन सा मौलिक अधिकार नहीं है?", oE: ["Right to Equality", "Right to Freedom", "Right to Property", "Right to Religion"], oH: ["समानता का अधिकार", "स्वतंत्रता का अधिकार", "संपत्ति का अधिकार", "धर्म का अधिकार"], c: 2 },
          { qE: "The Constitution of India was adopted on __________.", qH: "भारत का संविधान __________ को अपनाया गया था।", oE: ["26 Jan 1950", "15 Aug 1947", "26 Nov 1949", "2 Oct 1869"], oH: ["26 जनवरी 1950", "15 अगस्त 1947", "26 नवंबर 1949", "2 अक्टूबर 1869"], c: 0 },
          { qE: "Dr. BR Ambedkar is known as __________.", qH: "डॉ. बी.आर. अंबेडकर को __________ के रूप में जाना जाता है।", oE: ["Father of Constitution", "Father of Nation", "Father of Economics", "Father of Science"], oH: ["संविधान के जनक", "राष्ट्रपिता", "अर्थशास्त्र के जनक", "विज्ञान के जनक"], c: 0 },
          { qE: "Which is a duty of a citizen?", qH: "एक नागरिक का क्या कर्तव्य है?", oE: ["Voting", "Ignoring laws", "Breaking rules", "Avoiding taxes"], oH: ["मतदान", "कानूनों को अनदेखा करना", "नियम तोड़ना", "करों से बचना"], c: 0 },
          { qE: "Pollution is caused by __________.", qH: "प्रदूषण __________ के कारण होता है।", oE: ["Harmful substances in environment", "Clean air", "Fresh water", "Green trees"], oH: ["पर्यावरण में हानिकारक पदार्थ", "स्वच्छ हवा", "ताजा पानी", "हरे पेड़"], c: 0 },
          { qE: "Green jobs help in __________.", qH: "ग्रीन जॉब्स __________ में मदद करते हैं।", oE: ["Reducing pollution", "Increasing pollution", "Creating more waste", "Using more plastic"], oH: ["प्रदूषण कम करना", "प्रदूषण बढ़ाना", "अधिक कचरा पैदा करना", "अधिक प्लास्टिक का उपयोग करना"], c: 0 },
          { qE: "What does 'Sovereign' mean?", qH: "'सॉवरेन' का क्या अर्थ है?", oE: ["India can make its own decisions", "India is under British rule", "India has no government", "India is a colony"], oH: ["भारत अपने निर्णय स्वयं ले सकता है", "भारत ब्रिटिश शासन के अधीन है", "भारत की कोई सरकार नहीं है", "भारत एक कॉलोनी है"], c: 0 },
          { qE: "Which is a secular country?", qH: "कौन सा देश धर्मनिरपेक्ष है?", oE: ["India", "Saudi Arabia", "Vatican City", "Iran"], oH: ["भारत", "सऊदी अरब", "वेटिकन सिटी", "ईरान"], c: 0 },
          { qE: "The Preamble is __________.", qH: "प्रस्तावना __________ है।", oE: ["A summary of the Constitution", "A law book", "A court judgment", "A government order"], oH: ["संविधान का सारांश", "एक कानून की किताब", "एक अदालत का निर्णय", "एक सरकारी आदेश"], c: 0 },
          { qE: "Right to Equality means __________.", qH: "समानता के अधिकार का अर्थ __________ है।", oE: ["Everyone is equal before law", "Some people are superior", "Only rich have rights", "Only men have rights"], oH: ["कानून के समक्ष सभी समान हैं", "कुछ लोग श्रेष्ठ हैं", "केवल अमीरों के अधिकार हैं", "केवल पुरुषों के अधिकार हैं"], c: 0 },
          { qE: "Right to Freedom includes __________.", qH: "स्वतंत्रता के अधिकार में __________ शामिल है।", oE: ["Freedom of speech", "Freedom to steal", "Freedom to cheat", "Freedom to hurt others"], oH: ["बोलने की स्वतंत्रता", "चोरी करने की स्वतंत्रता", "धोखा देने की स्वतंत्रता", "दूसरों को चोट पहुँचाने की स्वतंत्रता"], c: 0 },
          { qE: "Right against Exploitation prohibits __________.", qH: "शोषण के खिलाफ अधिकार __________ को प्रतिबंधित करता है।", oE: ["Child labour", "Adult labour", "Skilled labour", "Unskilled labour"], oH: ["बाल श्रम", "वयस्क श्रम", "कुशल श्रम", "अकुशल श्रम"], c: 0 },
          { qE: "Right to Religion means __________.", qH: "धर्म के अधिकार का अर्थ __________ है।", oE: ["Practice any religion", "Only one religion", "No religion", "Force others to convert"], oH: ["कोई भी धर्म अपनाना", "केवल एक धर्म", "कोई धर्म नहीं", "दूसरों को धर्मांतरित करने के लिए मजबूर करना"], c: 0 },
          { qE: "Cultural and Educational Rights protect __________.", qH: "सांस्कृतिक और शैक्षिक अधिकार __________ की रक्षा करते हैं।", oE: ["Language and culture", "Money and property", "Jobs and salary", "Houses and land"], oH: ["भाषा और संस्कृति", "पैसा और संपत्ति", "नौकरी और वेतन", "घर और जमीन"], c: 0 },
          { qE: "Right to Constitutional Remedies allows __________.", qH: "संवैधानिक उपचार का अधिकार __________ की अनुमति देता है।", oE: ["Move to Supreme Court", "Move to High Court only", "No court access", "Only police complaint"], oH: ["सुप्रीम कोर्ट जाना", "केवल हाईकोर्ट जाना", "कोई कोर्ट नहीं", "केवल पुलिस शिकायत"], c: 0 },
          { qE: "Deforestation means __________.", qH: "वनों की कटाई का अर्थ __________ है।", oE: ["Cutting down trees", "Planting trees", "Saving trees", "Watering trees"], oH: ["पेड़ काटना", "पेड़ लगाना", "पेड़ बचाना", "पेड़ों को पानी देना"], c: 0 },
          { qE: "Water pollution is caused by __________.", qH: "जल प्रदूषण __________ के कारण होता है।", oE: ["Releasing chemicals into water", "Rain", "Rivers flowing", "Fresh water"], oH: ["पानी में रसायन छोड़ना", "बारिश", "बहती नदियाँ", "ताजा पानी"], c: 0 },
          { qE: "Global warming is caused by __________.", qH: "ग्लोबल वार्मिंग __________ के कारण होती है।", oE: ["Rise in earth's temperature", "Falling temperature", "Heavy rain", "Snowfall"], oH: ["पृथ्वी के तापमान में वृद्धि", "तापमान गिरना", "भारी बारिश", "बर्फबारी"], c: 0 },
          { qE: "Green lifestyle means __________.", qH: "हरित जीवनशैली का अर्थ __________ है।", oE: ["Avoiding plastic", "Using more electricity", "Driving more cars", "Throwing waste anywhere"], oH: ["प्लास्टिक से बचना", "अधिक बिजली का उपयोग करना", "अधिक कार चलाना", "कचरा कहीं भी फेंकना"], c: 0 },
          { qE: "Recycling means __________.", qH: "रीसाइक्लिंग का अर्थ __________ है।", oE: ["Using waste to make new products", "Throwing waste away", "Burning waste", "Burying waste"], oH: ["कचरे से नए उत्पाद बनाना", "कचरा फेंक देना", "कचरा जलाना", "कचरा दफनाना"], c: 0 },
          { qE: "Sustainability means __________.", qH: "सस्टेनेबिलिटी का अर्थ __________ है।", oE: ["Using resources wisely for the future", "Using all resources immediately", "Destroying resources", "Ignoring resources"], oH: ["भविष्य के लिए संसाधनों का बुद्धिमानी से उपयोग करना", "सभी संसाधनों का तुरंत उपयोग करना", "संसाधनों को नष्ट करना", "संसाधनों को अनदेखा करना"], c: 0 },
          { qE: "Eco-friendly means __________.", qH: "इको-फ्रेंडली का अर्थ __________ है।", oE: ["Not harming the environment", "Harming the environment", "Ignoring the environment", "Polluting the environment"], oH: ["पर्यावरण को नुकसान न पहुँचाना", "पर्यावरण को नुकसान पहुँचाना", "पर्यावरण को अनदेखा करना", "पर्यावरण को प्रदूषित करना"], c: 0 },
          { qE: "Which is a renewable resource?", qH: "कौन सा नवीकरणीय संसाधन है?", oE: ["Solar energy", "Coal", "Petrol", "Diesel"], oH: ["सौर ऊर्जा", "कोयला", "पेट्रोल", "डीजल"], c: 0 },
          { qE: "Which is a non-renewable resource?", qH: "कौन सा अनवीकरणीय संसाधन है?", oE: ["Wind energy", "Solar energy", "Petrol", "Hydel power"], oH: ["पवन ऊर्जा", "सौर ऊर्जा", "पेट्रोल", "जल विद्युत"], c: 2 },
          { qE: "Reduce means __________.", qH: "रिड्यूस का अर्थ __________ है।", oE: ["Using less", "Using more", "Using waste", "Using all"], oH: ["कम उपयोग करना", "अधिक उपयोग करना", "कचरे का उपयोग करना", "सभी का उपयोग करना"], c: 0 },
          { qE: "Reuse means __________.", qH: "रीयूज़ का अर्थ __________ है।", oE: ["Using things again", "Using things once", "Throwing things away", "Buying new things"], oH: ["चीजों का फिर से उपयोग करना", "चीजों का एक बार उपयोग करना", "चीजों को फेंक देना", "नई चीजें खरीदना"], c: 0 },
          { qE: "Which is a green practice?", qH: "कौन सी हरित प्रथा है?", oE: ["Carrying a cloth bag", "Using plastic bags", "Using disposable plates", "Throwing waste on road"], oH: ["कपड़े का थैला ले जाना", "प्लास्टिक बैग का उपयोग करना", "डिस्पोजेबल प्लेटों का उपयोग करना", "सड़क पर कचरा फेंकना"], c: 0 },
          { qE: "Which causes air pollution?", qH: "किससे वायु प्रदूषण होता है?", oE: ["Smoke from factories", "Rain", "Fresh air", "Trees"], oH: ["कारखानों से धुआं", "बारिश", "ताजी हवा", "पेड़"], c: 0 }
        ]
      },

      // ---- MODULE 2: 21st Century Skills (65 Qs) ----
      "Module 2: 21st Century Skills": {
        questions: [
          { qE: "Major changes in manufacturing came with _____.", qH: "विनिर्माण में प्रमुख परिवर्तन _____ के साथ आए।", oE: ["Green revolution", "Milk revolution", "Industrial revolution", "White revolution"], oH: ["हरित क्रांति", "दुग्ध क्रांति", "औद्योगिक क्रांति", "श्वेत क्रांति"], c: 2 },
          { qE: "Manufacturing changed due to technology and _____ development.", qH: "प्रौद्योगिकी और _____ विकास के कारण विनिर्माण बदल गया।", oE: ["Training", "Scientific", "Teaching", "Facilitation"], oH: ["प्रशिक्षण", "वैज्ञानिक", "शिक्षण", "सुविधा"], c: 1 },
          { qE: "Regular skill assessment is needed for _____.", qH: "नियमित कौशल मूल्यांकन _____ के लिए आवश्यक है।", oE: ["Career", "Interview", "Job", "Skill"], oH: ["करियर", "साक्षात्कार", "नौकरी", "कौशल"], c: 0 },
          { qE: "Neetu has storytelling skills. What intelligence type is it?", qH: "नीतू के पास कहानी कहने का कौशल है। यह किस प्रकार की बुद्धि है?", oE: ["Picture Smart", "Logic Smart", "Body Smart", "Word Smart"], oH: ["चित्र स्मार्ट", "तर्क स्मार्ट", "शरीर स्मार्ट", "शब्द स्मार्ट"], c: 3 },
          { qE: "What is NOT a part of personality?", qH: "व्यक्तित्व का कौन सा हिस्सा नहीं है?", oE: ["Strengths", "Weaknesses", "Beliefs", "Skin colour"], oH: ["शक्तियाँ", "कमजोरियाँ", "विश्वास", "त्वचा का रंग"], c: 3 },
          { qE: "Things one is good at are _____.", qH: "जिसमें व्यक्ति अच्छा हो, वे _____ हैं।", oE: ["Concerns", "Interests", "Abilities", "Passion"], oH: ["चिंताएँ", "रुचियाँ", "क्षमताएँ", "जुनून"], c: 2 },
          { qE: "Inability to do something well is one's _____.", qH: "कुछ अच्छा न कर पाना एक व्यक्ति की _____ है।", oE: ["Weakness", "Aspiration", "Strength", "Value"], oH: ["कमजोरी", "आकांक्षा", "शक्ति", "मूल्य"], c: 0 },
          { qE: "Meena likes music in free time. This is her _____ to improve.", qH: "मीना खाली समय में संगीत पसंद करती है। यह सुधार के लिए उसकी _____ है।", oE: ["Logics", "Interests", "Value", "Weakness"], oH: ["तर्क", "रुचियाँ", "मूल्य", "कमजोरी"], c: 1 },
          { qE: "Bijo overcame his weakness in Excel. This shows _____.", qH: "बिजो ने एक्सेल में अपनी कमजोरी पर काबू पाया। यह _____ दिखाता है।", oE: ["Belief", "Value", "Leader", "Strength"], oH: ["विश्वास", "मूल्य", "नेता", "शक्ति"], c: 3 },
          { qE: "How we interact with external environment is known as _____ skills.", qH: "हम बाहरी वातावरण के साथ कैसे बातचीत करते हैं, इसे _____ कौशल कहा जाता है।", oE: ["Behavioural", "Technical", "Musical", "Teaching"], oH: ["व्यवहारिक", "तकनीकी", "संगीतमय", "शिक्षण"], c: 0 },
          { qE: "_____ is a behavioral skill for organizing work on time.", qH: "_____ एक व्यवहारिक कौशल है जो समय पर काम को व्यवस्थित करने के लिए आवश्यक है।", oE: ["Painting", "Cooking", "Time Management", "Dancing"], oH: ["पेंटिंग", "कुकिंग", "समय प्रबंधन", "डांसिंग"], c: 2 },
          { qE: "The way we solve a problem is called _____.", qH: "हम जिस तरह से समस्या का समाधान करते हैं, उसे _____ कहा जाता है।", oE: ["Positive attitude", "Conflict resolution", "Negative attitude", "Passion"], oH: ["सकारात्मक दृष्टिकोण", "संघर्ष समाधान", "नकारात्मक दृष्टिकोण", "जुनून"], c: 1 },
          { qE: "Rehana solving a problem with right attitude is an example of _____ attitude.", qH: "रीहाना का सही दृष्टिकोण के साथ समस्या का समाधान करना _____ दृष्टिकोण का उदाहरण है।", oE: ["Negative", "Technical", "Scientific", "Positive"], oH: ["नकारात्मक", "तकनीकी", "वैज्ञानिक", "सकारात्मक"], c: 3 },
          { qE: "Alpan doing yoga and watching YouTube for motivation is _____.", qH: "अलपन का योग करना और प्रेरणा के लिए YouTube देखना _____ है।", oE: ["Self-motivation", "Time Management", "Decision-Making", "Problem-Solving"], oH: ["आत्म-प्रेरणा", "समय प्रबंधन", "निर्णय-निर्माण", "समस्या-समाधान"], c: 0 },
          { qE: "_____ is a way of thinking to solve a problem.", qH: "_____ समस्या को हल करने के लिए सोचने का एक तरीका है।", oE: ["Critical thinking", "Self confidence", "Negative attitude", "Time Management"], oH: ["आलोचनात्मक सोच", "आत्मविश्वास", "नकारात्मक दृष्टिकोण", "समय प्रबंधन"], c: 0 },
          { qE: "Choosing between options is known as _____ process.", qH: "विकल्पों के बीच चयन करना _____ प्रक्रिया कहलाता है।", oE: ["Manufacturing", "Decision-making", "Scientific", "Technical"], oH: ["विनिर्माण", "निर्णय-निर्माण", "वैज्ञानिक", "तकनीकी"], c: 1 },
          { qE: "Which is NOT part of decision-making?", qH: "निर्णय-निर्माण का कौन सा हिस्सा नहीं है?", oE: ["Identify problem", "Generate options", "Implement decision", "Performance"], oH: ["समस्या की पहचान", "विकल्प उत्पन्न करना", "निर्णय लागू करना", "प्रदर्शन"], c: 3 },
          { qE: "Manu thinking before deciding is an example of _____.", qH: "मनु का निर्णय लेने से पहले सोचना _____ का उदाहरण है।", oE: ["Self-motivation", "Critical thinking", "Time Management", "Logical thinking"], oH: ["आत्म-प्रेरणा", "आलोचनात्मक सोच", "समय प्रबंधन", "तार्किक सोच"], c: 1 },
          { qE: "Revathi listing pros and cons before deciding is _____.", qH: "निर्णय लेने से पहले रेवती का पक्ष-विपक्ष सूचीबद्ध करना _____ है।", oE: ["Decision-making", "Positive attitude", "Conflict resolution", "Negative attitude"], oH: ["निर्णय-निर्माण", "सकारात्मक दृष्टिकोण", "संघर्ष समाधान", "नकारात्मक दृष्टिकोण"], c: 0 },
          { qE: "What are the advantages of time management?", qH: "समय प्रबंधन के क्या लाभ हैं?", oE: ["Complete tasks on time", "Achieve daily goals", "Reduce stress", "All of these"], oH: ["समय पर कार्य पूरा करना", "दैनिक लक्ष्य प्राप्त करना", "तनाव कम करना", "ये सभी"], c: 3 },
          { qE: "Good time management improves _____ at work.", qH: "अच्छा समय प्रबंधन कार्य पर _____ में सुधार करता है।", oE: ["Weakness", "Performance", "Stress", "Pressure"], oH: ["कमजोरी", "प्रदर्शन", "तनाव", "दबाव"], c: 1 },
          { qE: "The time blocked for work is a _____ technique.", qH: "काम के लिए अवरुद्ध समय _____ तकनीक है।", oE: ["Doro", "Pomo", "Pomodoro", "Domo"], oH: ["डोरो", "पोमो", "पोमोडोरो", "डोमो"], c: 2 },
          { qE: "Rahim learning MS Office during lunch is an example of _____.", qH: "रहीम का लंच के दौरान MS Office सीखना _____ का उदाहरण है।", oE: ["Time Management", "Over thinking", "Online job", "Logical thinking"], oH: ["समय प्रबंधन", "अत्यधिक सोच", "ऑनलाइन नौकरी", "तार्किक सोच"], c: 0 },
          { qE: "Bhanu uses 25-min planner without distraction. Which method?", qH: "भानु बिना किसी व्यवधान के 25-मिनट के प्लानर का उपयोग करती है। कौन सी विधि?", oE: ["Pomodoro", "Timing", "Blocktime", "Calendar"], oH: ["पोमोडोरो", "टाइमिंग", "ब्लॉकटाइम", "कैलेंडर"], c: 0 },
          { qE: "Finding a solution to any problem is _____ skill.", qH: "किसी भी समस्या का समाधान खोजना _____ कौशल है।", oE: ["Over thinking", "Critical thinking", "Decision-making", "Problem solving"], oH: ["अत्यधिक सोच", "आलोचनात्मक सोच", "निर्णय-निर्माण", "समस्या-समाधान"], c: 3 },
          { qE: "Which is NOT a step in problem solving?", qH: "समस्या-समाधान में कौन सा चरण नहीं है?", oE: ["Identify problem", "Divide into parts", "Set timer", "Find solutions"], oH: ["समस्या की पहचान", "भागों में विभाजित", "टाइमर सेट", "समाधान खोजें"], c: 2 },
          { qE: "If one solves problems well, one gets better at _____.", qH: "यदि कोई समस्याओं को अच्छी तरह से हल करता है, तो वह _____ में बेहतर हो जाता है।", oE: ["Self-motivation", "Problem-solving", "Career", "Painting"], oH: ["आत्म-प्रेरणा", "समस्या-समाधान", "करियर", "पेंटिंग"], c: 1 },
          { qE: "Soni trying another way after failing shows _____.", qH: "असफल होने के बाद सोनी का दूसरा रास्ता आजमाना _____ दिखाता है।", oE: ["Persistence", "Quitting", "Giving up", "Complaining"], oH: ["दृढ़ता", "छोड़ देना", "हार मान लेना", "शिकायत करना"], c: 0 },
          { qE: "First step in problem solving is _____.", qH: "समस्या-समाधान में पहला कदम _____ है।", oE: ["Complain", "Identify the problem", "Sell it", "Throw it"], oH: ["शिकायत करना", "समस्या की पहचान करना", "इसे बेच देना", "इसे फेंक देना"], c: 1 },
          { qE: "Cats is an example of ____ word.", qH: "Cats _____ शब्द का एक उदाहरण है।", oE: ["Words", "Plural", "Singular", "Opposite"], oH: ["शब्द", "बहुवचन", "एकवचन", "विलोम"], c: 1 },
          { qE: "Singular naming words are used when ____ person/place is present.", qH: "एकवचन नामकरण शब्दों का उपयोग तब किया जाता है जब ____ व्यक्ति/स्थान मौजूद हो।", oE: ["Many", "Few", "One", "More"], oH: ["कई", "कुछ", "एक", "अधिक"], c: 2 },
          { qE: "Plural of child is ____.", qH: "Child का बहुवचन ____ है।", oE: ["Person", "Infant", "Kid", "Children"], oH: ["व्यक्ति", "शिशु", "बच्चा", "बच्चे"], c: 3 },
          { qE: "Computers' in 'many computers' is ____ form.", qH: "'many computers' में 'computers' ____ रूप है।", oE: ["Less", "Plural", "Minimum", "Maximum"], oH: ["कम", "बहुवचन", "न्यूनतम", "अधिकतम"], c: 1 },
          { qE: "In 'toothache' sentence, which is plural?", qH: "'दांत दर्द' वाले वाक्य में कौन सा बहुवचन शब्द है?", oE: ["Teeth", "Tooth", "Vinay", "Dentist"], oH: ["दांत", "दांत (एकवचन)", "विनय", "दंत चिकित्सक"], c: 0 },
          { qE: "Pronouns replace ____.", qH: "सर्वनाम ____ की जगह लेते हैं।", oE: ["Spellings", "Adjective", "Verb", "Naming words"], oH: ["वर्तनी", "विशेषण", "क्रिया", "नामकरण शब्द"], c: 3 },
          { qE: "They' is used to refer to ____.", qH: "'They' का उपयोग ____ को संदर्भित करने के लिए किया जाता है।", oE: ["He", "She", "Many people", "Our"], oH: ["वह (पुरुष)", "वह (महिला)", "बहुत से लोग", "हमारा"], c: 2 },
          { qE: "Pronoun 'I' is used for ____.", qH: "सर्वनाम 'I' का उपयोग ____ के लिए किया जाता है।", oE: ["Many", "Myself", "Other", "That"], oH: ["कई", "स्वयं", "अन्य", "वह"], c: 1 },
          { qE: "Ramesh likes office. ____ likes it.", qH: "रमेश को ऑफिस पसंद है। ____ इसे पसंद करता है।", oE: ["He", "It", "What", "That"], oH: ["वह (पुरुष)", "यह", "क्या", "वह"], c: 0 },
          { qE: "Action words are also called _____.", qH: "क्रियात्मक शब्दों को _____ भी कहा जाता है।", oE: ["Center", "Are", "Verbs", "Is"], oH: ["केंद्र", "हैं", "क्रियाएँ", "है"], c: 2 },
          { qE: "Verbs tell the action of the _____.", qH: "क्रियाएँ _____ की क्रिया बताती हैं।", oE: ["Cow", "Change", "Act", "Naming words"], oH: ["गाय", "परिवर्तन", "अधिनियम", "नामकरण शब्द"], c: 3 },
          { qE: "Kim fell from bike yesterday. Tense is _____.", qH: "किम कल बाइक से गिर गई। काल _____ है।", oE: ["Future", "Past", "Present", "Clear"], oH: ["भविष्य", "भूत", "वर्तमान", "स्पष्ट"], c: 1 },
          { qE: "'It is going to be sunny tomorrow' Tense is _____.", qH: "'कल धूप होने वाली है' काल _____ है।", oE: ["Future", "Past", "Date", "Day"], oH: ["भविष्य", "भूत", "तारीख", "दिन"], c: 0 },
          { qE: "Arun travels to school. Action word is _____.", qH: "अरुण स्कूल जाता है। क्रियात्मक शब्द _____ है।", oE: ["bus", "travels", "school", "Arun"], oH: ["बस", "यात्रा करता है", "स्कूल", "अरुण"], c: 1 },
          { qE: "Adjectives are ____ words.", qH: "विशेषण _____ शब्द हैं।", oE: ["Sound", "Finish", "Describing", "Neutral"], oH: ["ध्वनि", "समाप्त", "वर्णन करने वाले", "तटस्थ"], c: 2 },
          { qE: "Describing words add information to _____.", qH: "वर्णनात्मक शब्द _____ में जानकारी जोड़ते हैं।", oE: ["Naming words", "Bad", "Sad", "Numbers"], oH: ["नामकरण शब्द", "बुरा", "उदास", "संख्या"], c: 0 },
          { qE: "In 'The sea is blue' adjective is _____.", qH: "'समुद्र नीला है' में विशेषण _____ है।", oE: ["sea", "the", "is", "blue"], oH: ["समुद्र", "एक", "है", "नीला"], c: 3 },
          { qE: "In 'large pot' the describing word is _____.", qH: "'बड़ा बर्तन' में वर्णनात्मक शब्द _____ है।", oE: ["large", "Arjun", "water", "into"], oH: ["बड़ा", "अर्जुन", "पानी", "में"], c: 0 },
          { qE: "Punctuation makes meaning _____.", qH: "विराम चिह्न अर्थ को _____ बनाते हैं।", oE: ["ambiguous", "unclear", "think", "clear"], oH: ["अस्पष्ट", "अस्पष्ट", "सोच", "स्पष्ट"], c: 3 },
          { qE: "Sentence begins with _____ letter.", qH: "वाक्य _____ अक्षर से शुरू होता है।", oE: ["Capital", "Small", "Cursive", "Italics"], oH: ["बड़ा (Capital)", "छोटा", "सुलेख", "तिरछा"], c: 0 },
          { qE: "Comma shows a _____ in a sentence.", qH: "अल्पविराम (comma) वाक्य में _____ दिखाता है।", oE: ["Full stop", "Pair", "Break", "Capital letter"], oH: ["पूर्ण विराम", "जोड़ी", "विराम", "बड़ा अक्षर"], c: 2 },
          { qE: "Which is correctly punctuated?", qH: "कौन सा सही विराम चिह्नित है?", oE: ["After, the meeting, we will go out.", "After the meeting, we will go out.", "After the, meeting we will go, out.", "After the meeting we will go out."], oH: ["After, the meeting, we will go out.", "After the meeting, we will go out.", "After the, meeting we will go, out.", "After the meeting we will go out."], c: 1 },
          { qE: "Sentences are _____.", qH: "वाक्य _____ हैं।", oE: ["group of words with complete meaning", "Verbs", "Nouns", "Letters"], oH: ["पूर्ण अर्थ वाले शब्दों का समूह", "क्रियाएँ", "संज्ञाएँ", "अक्षर"], c: 0 },
          { qE: "Declarative sentence ends with _____.", qH: "घोषणात्मक वाक्य _____ के साथ समाप्त होता है।", oE: ["Comma (,)", "Question mark (?)", "Full stop (.)", "Exclamatory mark (!)"], oH: ["अल्पविराम (,)", "प्रश्न चिह्न (?)", "पूर्ण विराम (.)", "विस्मयादिबोधक चिह्न (!)"], c: 2 },
          { qE: "Exclamatory sentence ends with _____.", qH: "विस्मयादिबोधक वाक्य _____ के साथ समाप्त होता है।", oE: ["Full stop (.)", "Comma (,)", "Question mark (?)", "Exclamatory mark (!)"], oH: ["पूर्ण विराम (.)", "अल्पविराम (,)", "प्रश्न चिह्न (?)", "विस्मयादिबोधक चिह्न (!)"], c: 3 },
          { qE: "Wow! The flowers are beautiful. This is a _____ sentence.", qH: "वाह! फूल सुंदर हैं। यह एक _____ वाक्य है।", oE: ["Declarative (.)", "Exclamatory (!)", "Imperative", "Interrogative (?)"], oH: ["घोषणात्मक (.)", "विस्मयादिबोधक (!)", "आज्ञार्थक", "प्रश्नवाचक (?)"], c: 1 },
          { qE: "Police questioning about his crime. This is a _____ sentence.", qH: "पुलिस उसके अपराध के बारे में पूछताछ कर रही थी। यह एक _____ वाक्य है।", oE: ["Declarative (.)", "Interrogative (?)", "Exclamatory (!)", "None of these"], oH: ["घोषणात्मक (.)", "प्रश्नवाचक (?)", "विस्मयादिबोधक (!)", "इनमें से कोई नहीं"], c: 0 },
          { qE: "People can hear emotions and see facial expressions when we _____.", qH: "जब हम _____ करते हैं तो लोग भावनाओं को सुन सकते हैं और चेहरे के भाव देख सकते हैं।", oE: ["Speak", "Listen", "Taste", "See"], oH: ["बोलते हैं", "सुनते हैं", "चखते हैं", "देखते हैं"], c: 0 },
          { qE: "_____ contact helps communicate confidently.", qH: "_____ संपर्क आत्मविश्वास से संवाद करने में मदद करता है।", oE: ["Nose", "Eye", "Ear", "Skin"], oH: ["नाक", "आँख", "कान", "त्वचा"], c: 1 },
          { qE: "Emotions expressed through your _____.", qH: "भावनाएँ आपके _____ के माध्यम से व्यक्त होती हैं।", oE: ["Height", "Weight", "Voice", "Situation"], oH: ["ऊँचाई", "वजन", "आवाज़", "स्थिति"], c: 2 },
          { qE: "Effective communication is to both _____.", qH: "प्रभावी संचार दोनों _____ है।", oE: ["speak and listen well", "speak well", "see well", "learn well"], oH: ["अच्छी तरह से बोलना और सुनना", "अच्छी तरह बोलना", "अच्छी तरह देखना", "अच्छी तरह सीखना"], c: 0 },
          { qE: "We should _____ instructions in the classroom.", qH: "हमें कक्षा में निर्देशों को _____ करना चाहिए।", oE: ["learn", "listen to", "forget", "ignore"], oH: ["सीखना", "सुनना", "भूलना", "अनदेखा करना"], c: 1 },
          { qE: "Listening is important to ____ the information.", qH: "जानकारी को ____ करने के लिए सुनना महत्वपूर्ण है।", oE: ["forget", "overcome", "understand", "disobey"], oH: ["भूलना", "पार करना", "समझना", "अवज्ञा करना"], c: 2 },
          { qE: "Rahul writes sentences after watching news. He is _____.", qH: "राहुल समाचार देखने के बाद वाक्य लिखता है। वह _____ कर रहा है।", oE: ["Practicing listening", "Practicing News", "Practicing Movements", "None of these"], oH: ["सुनने का अभ्यास", "समाचार का अभ्यास", "गतिविधियों का अभ्यास", "इनमें से कोई नहीं"], c: 0 }
        ]
      },

      // ---- MODULE 3: Digital Skills (100 Qs) ----
      "Module 3: Digital Skills": {
        questions: [
          { qE: "Where is the power button on a desktop?", qH: "डेस्कटॉप पर पावर बटन कहाँ स्थित है?", oE: ["On the Keyboard", "On the CPU", "On the Speaker", "On the Mouse"], oH: ["कीबोर्ड पर", "CPU पर", "स्पीकर पर", "माउस पर"], c: 1 },
          { qE: "Most common word for switching off a computer is _____.", qH: "कंप्यूटर बंद करने के लिए सबसे आम शब्द _____ है।", oE: ["Hang Up", "Switch On", "Shut Down", "Power On"], oH: ["हैंग अप", "स्विच ऑन", "शट डाउन", "पावर ऑन"], c: 2 },
          { qE: "Which devices can connect via Bluetooth?", qH: "कौन से उपकरण ब्लूटूथ के माध्यम से कनेक्ट हो सकते हैं?", oE: ["Mouse", "Earphones", "Speakers", "All of these"], oH: ["माउस", "ईयरफोन", "स्पीकर", "ये सभी"], c: 3 },
          { qE: "Sonu wants to connect wirelessly. What technology can he use?", qH: "सोनू वायरलेस तरीके से कनेक्ट करना चाहता है। वह किस तकनीक का उपयोग कर सकता है?", oE: ["Bluetooth", "Wire", "Switch", "USB"], oH: ["ब्लूटूथ", "तार", "स्विच", "USB"], c: 0 },
          { qE: "Rajesh doesn't know Bluetooth connection. What should he do?", qH: "राजेश ब्लूटूथ कनेक्शन नहीं जानता। उसे क्या करना चाहिए?", oE: ["Use Google search", "Throw away earphones", "Buy new", "Sell earphones"], oH: ["Google खोज का उपयोग करें", "ईयरफोन फेंक दें", "नया खरीदें", "ईयरफोन बेच दें"], c: 0 },
          { qE: "_____ is the software in a computer to use it.", qH: "_____ वह सॉफ्टवेयर है जो कंप्यूटर में उपयोग करने के लिए डाला जाता है।", oE: ["Operating System", "Software", "App Store", "Settings"], oH: ["ऑपरेटिंग सिस्टम", "सॉफ्टवेयर", "ऐप स्टोर", "सेटिंग्स"], c: 0 },
          { qE: "Most common operating system is _____.", qH: "सबसे आम ऑपरेटिंग सिस्टम _____ है।", oE: ["Printer", "MS Office", "Router", "Windows"], oH: ["प्रिंटर", "MS Office", "राउटर", "Windows"], c: 3 },
          { qE: "Full form of OS is _____.", qH: "OS का पूर्ण रूप _____ है।", oE: ["Operating System", "Opening Screen", "Opening Software", "Original System"], oH: ["ऑपरेटिंग सिस्टम", "ओपनिंग स्क्रीन", "ओपनिंग सॉफ्टवेयर", "ओरिजिनल सिस्टम"], c: 0 },
          { qE: "How to identify Windows version?", qH: "Windows संस्करण की पहचान कैसे करें?", oE: ["By uninstalling", "By looking at opening screen", "By shutting down", "By reinstalling"], oH: ["अनइंस्टॉल करके", "ओपनिंग स्क्रीन देखकर", "शटडाउन करके", "रीइंस्टॉल करके"], c: 1 },
          { qE: "How to search for a file quickly?", qH: "फ़ाइल को जल्दी से कैसे खोजें?", oE: ["Click 'Type here to search'", "Search Play Store", "Restart", "Use Bluetooth"], oH: ["'Type here to search' पर क्लिक करें", "Play Store पर खोजें", "रीस्टार्ट करें", "ब्लूटूथ का उपयोग करें"], c: 0 },
          { qE: "Which app can create a file?", qH: "कौन सा ऐप फ़ाइल बना सकता है?", oE: ["MS Word", "MS Excel", "MS Powerpoint", "All of these"], oH: ["MS Word", "MS Excel", "MS Powerpoint", "ये सभी"], c: 3 },
          { qE: "Shortcut key to save a file?", qH: "फ़ाइल सहेजने की शॉर्टकट कुंजी?", oE: ["Ctrl+S", "Ctrl+X", "Ctrl+V", "Ctrl+P"], oH: ["Ctrl+S", "Ctrl+X", "Ctrl+V", "Ctrl+P"], c: 0 },
          { qE: "Shortcut key to copy a file?", qH: "फ़ाइल कॉपी करने की शॉर्टकट कुंजी?", oE: ["Ctrl+C", "Ctrl+X", "Ctrl+S", "Ctrl+P"], oH: ["Ctrl+C", "Ctrl+X", "Ctrl+S", "Ctrl+P"], c: 0 },
          { qE: "How to transfer a file to another folder?", qH: "फ़ाइल को दूसरे फोल्डर में कैसे ट्रांसफर करें?", oE: ["Click power off", "Select, Ctrl+X, then Ctrl+V", "Click escape", "Click backspace"], oH: ["पावर ऑफ पर क्लिक करें", "चुनें, Ctrl+X, फिर Ctrl+V", "एस्केप पर क्लिक करें", "बैकस्पेस पर क्लिक करें"], c: 1 },
          { qE: "How to safeguard information on computer?", qH: "कंप्यूटर पर जानकारी को कैसे सुरक्षित रखें?", oE: ["Set strong password", "Lock when not using", "Save with clear name", "All of these"], oH: ["मजबूत पासवर्ड सेट करें", "उपयोग न करने पर लॉक करें", "स्पष्ट नाम से सहेजें", "ये सभी"], c: 3 },
          { qE: "Shortcut key for bold text?", qH: "बोल्ड टेक्स्ट के लिए शॉर्टकट कुंजी?", oE: ["Ctrl+S", "Ctrl+B", "Ctrl+U", "Ctrl+I"], oH: ["Ctrl+S", "Ctrl+B", "Ctrl+U", "Ctrl+I"], c: 1 },
          { qE: "_____ is at the top of MS Word screen.", qH: "MS Word स्क्रीन के शीर्ष पर _____ है।", oE: ["Menu Bar", "Taskbar", "Space Bar", "Scroll bar"], oH: ["मेनू बार", "टास्कबार", "स्पेस बार", "स्क्रॉल बार"], c: 0 },
          { qE: "Which tab changes page type (portrait/landscape)?", qH: "कौन सा टैब पेज प्रकार (पोर्ट्रेट/लैंडस्केप) बदलता है?", oE: ["Layout", "Insert", "Design", "Review"], oH: ["लेआउट", "इंसर्ट", "डिज़ाइन", "रिव्यू"], c: 0 },
          { qE: "Which option makes text slant?", qH: "कौन सा विकल्प टेक्स्ट को तिरछा बनाता है?", oE: ["Bold", "Italic", "Underline", "Numbered List"], oH: ["बोल्ड", "इटैलिक", "अंडरलाइन", "नंबर्ड लिस्ट"], c: 1 },
          { qE: "Shortcut key for underline?", qH: "अंडरलाइन के लिए शॉर्टकट कुंजी?", oE: ["Ctrl+S", "Ctrl+B", "Ctrl+U", "Ctrl+I"], oH: ["Ctrl+S", "Ctrl+B", "Ctrl+U", "Ctrl+I"], c: 2 },
          { qE: "What is the AutoSum symbol in Excel?", qH: "Excel में AutoSum का प्रतीक क्या है?", oE: ["Σ", "Z", "X", "Y"], oH: ["Σ", "Z", "X", "Y"], c: 0 },
          { qE: "How to save an Excel workbook?", qH: "Excel workbook को कैसे सहेजें?", oE: ["By closing sheet", "Ctrl+S", "By deleting it", "By writing it"], oH: ["शीट बंद करके", "Ctrl+S", "इसे हटाकर", "इसे लिखकर"], c: 1 },
          { qE: "Cell name in column E, row 5 is _____.", qH: "कॉलम E, पंक्ति 5 में सेल का नाम _____ है।", oE: ["E1", "E", "E5", "5C"], oH: ["E1", "E", "E5", "5C"], c: 2 },
          { qE: "Ways to connect to internet?", qH: "इंटरनेट से कनेक्ट होने के तरीके?", oE: ["Use mouse", "WiFi or mobile data", "Use printer", "Use bluetooth"], oH: ["माउस का उपयोग करें", "WiFi या मोबाइल डेटा", "प्रिंटर का उपयोग करें", "ब्लूटूथ का उपयोग करें"], c: 1 },
          { qE: "What can be done using the internet?", qH: "इंटरनेट का उपयोग करके क्या किया जा सकता है?", oE: ["Find job info", "Create digital resume", "Learn new skills", "All of these"], oH: ["नौकरी की जानकारी खोजें", "डिजिटल रिज्यूमे बनाएँ", "नए कौशल सीखें", "ये सभी"], c: 3 },
          { qE: "What are the benefits of the internet?", qH: "इंटरनेट के क्या लाभ हैं?", oE: ["Speed", "Safety", "Access to information", "All of these"], oH: ["गति", "सुरक्षा", "जानकारी तक पहुंच", "ये सभी"], c: 3 },
          { qE: "Which devices can use mobile data?", qH: "कौन से उपकरण मोबाइल डेटा का उपयोग कर सकते हैं?", oE: ["Tablet", "Washing machine", "Gas oven", "Landline"], oH: ["टैबलेट", "वॉशिंग मशीन", "गैस ओवन", "लैंडलाइन"], c: 0 },
          { qE: "_____ is called the library of internet.", qH: "_____ को इंटरनेट की लाइब्रेरी कहा जाता है।", oE: ["Software", "Search Engine", "Hardware", "Mouse"], oH: ["सॉफ्टवेयर", "सर्च इंजन", "हार्डवेयर", "माउस"], c: 1 },
          { qE: "What is needed to access web information?", qH: "वेब जानकारी तक पहुँचने के लिए क्या आवश्यक है?", oE: ["Internet connection", "Mouse", "Data cable", "Keyboard"], oH: ["इंटरनेट कनेक्शन", "माउस", "डेटा केबल", "कीबोर्ड"], c: 0 },
          { qE: "Correct words to tell search engine are called _____.", qH: "सर्च इंजन को बताने के लिए सही शब्द _____ कहलाते हैं।", oE: ["Keywords", "Web page", "Website", "Internet"], oH: ["कीवर्ड", "वेब पेज", "वेबसाइट", "इंटरनेट"], c: 0 },
          { qE: "Which search engine can Maya use?", qH: "माया किस सर्च इंजन का उपयोग कर सकती है?", oE: ["Google", "Bing", "Yahoo", "All of these"], oH: ["Google", "Bing", "Yahoo", "ये सभी"], c: 3 },
          { qE: "What is the role of web pages?", qH: "वेब पेजों की क्या भूमिका है?", oE: ["Act as search engine", "Act as a library", "Act as internet", "None"], oH: ["सर्च इंजन के रूप में कार्य करें", "लाइब्रेरी के रूप में कार्य करें", "इंटरनेट के रूप में कार्य करें", "कोई नहीं"], c: 1 },
          { qE: "Which is a universal ID card?", qH: "कौन सा यूनिवर्सल ID कार्ड है?", oE: ["Bank Credit card", "PAN Card", "Aadhaar Card", "Employers ID"], oH: ["बैंक क्रेडिट कार्ड", "PAN कार्ड", "आधार कार्ड", "नियोक्ता ID"], c: 2 },
          { qE: "Website to book train tickets?", qH: "ट्रेन टिकट बुक करने के लिए वेबसाइट?", oE: ["india.gov.in", "myaadhaar.uidai.gov.in", "irctc.co.in", "igod.gov.in"], oH: ["india.gov.in", "myaadhaar.uidai.gov.in", "irctc.co.in", "igod.gov.in"], c: 2 },
          { qE: "Website for government schemes info?", qH: "सरकारी योजनाओं की जानकारी के लिए वेबसाइट?", oE: ["india.gov.in", "swayam.gov.in", "igod.gov.in", "education.gov.in"], oH: ["india.gov.in", "swayam.gov.in", "igod.gov.in", "education.gov.in"], c: 0 },
          { qE: "Portal for upskilling in designing?", qH: "डिजाइनिंग में अपस्किलिंग के लिए पोर्टल?", oE: ["swayam.gov.in", "igod.gov.in", "india.gov.in", "None"], oH: ["swayam.gov.in", "igod.gov.in", "india.gov.in", "कोई नहीं"], c: 0 },
          { qE: "Which is NOT a social media app?", qH: "कौन सा सोशल मीडिया ऐप नहीं है?", oE: ["Instagram", "WhatsApp", "LinkedIn", "Amazon"], oH: ["Instagram", "WhatsApp", "LinkedIn", "Amazon"], c: 3 },
          { qE: "Which is NOT for chatting/video calls?", qH: "कौन सा चैटिंग/वीडियो कॉल के लिए नहीं है?", oE: ["Instagram", "WhatsApp", "Telegram", "None of these"], oH: ["Instagram", "WhatsApp", "Telegram", "इनमें से कोई नहीं"], c: 3 },
          { qE: "Which profile shows education, skills, experience?", qH: "कौन सी प्रोफ़ाइल शिक्षा, कौशल, अनुभव दिखाती है?", oE: ["Google mail", "LinkedIn", "WhatsApp", "Telegram"], oH: ["Google mail", "LinkedIn", "WhatsApp", "Telegram"], c: 1 },
          { qE: "Naina wants safety measures on social media. What to do?", qH: "नैना सोशल मीडिया पर सुरक्षा उपाय चाहती है। क्या करें?", oE: ["Don't share with unknown", "Don't share personal info", "Don't send rude comments", "All of these"], oH: ["अज्ञात के साथ साझा न करें", "व्यक्तिगत जानकारी साझा न करें", "अशिष्ट टिप्पणी न भेजें", "ये सभी"], c: 3 },
          { qE: "Ridhima wants to stay safe on social media. What to do?", qH: "रिधिमा सोशल मीडिया पर सुरक्षित रहना चाहती है। क्या करें?", oE: ["Avoid sharing password", "Avoid sharing address", "Avoid sharing location", "All of these"], oH: ["पासवर्ड साझा करने से बचें", "पता साझा करने से बचें", "स्थान साझा करने से बचें", "ये सभी"], c: 3 },
          { qE: "Before sharing on social media, THINK. Which is NOT correct?", qH: "सोशल मीडिया पर साझा करने से पहले THINK करें। कौन सा सही नहीं है?", oE: ["Is it True?", "Is it Necessary?", "Is it Helpful?", "All of these"], oH: ["क्या यह सत्य है?", "क्या यह आवश्यक है?", "क्या यह सहायक है?", "ये सभी"], c: 3 },
          { qE: "Which is NOT an impactful use of social media?", qH: "सोशल मीडिया का कौन सा प्रभावशाली उपयोग नहीं है?", oE: ["Sharing jokes on religion", "Encouraging donations", "Mentoring others", "Sharing verified news"], oH: ["धर्म पर चुटकुले साझा करना", "दान के लिए प्रोत्साहित करना", "दूसरों को मेंटर करना", "सत्यापित समाचार साझा करना"], c: 0 },
          { qE: "_____ uses digital tech to help rural India.", qH: "_____ ग्रामीण भारत की मदद के लिए डिजिटल तकनीक का उपयोग करता है।", oE: ["Digital Empowerment", "Digital Empowerment Foundation", "Digital Education Foundation", "Digital Education Fund"], oH: ["डिजिटल एम्पावरमेंट", "डिजिटल एम्पावरमेंट फाउंडेशन", "डिजिटल एजुकेशन फाउंडेशन", "डिजिटल एजुकेशन फंड"], c: 1 },
          { qE: "Shortcut key for undo?", qH: "अंडू के लिए शॉर्टकट कुंजी?", oE: ["Ctrl+Z", "Ctrl+X", "Ctrl+C", "Ctrl+V"], oH: ["Ctrl+Z", "Ctrl+X", "Ctrl+C", "Ctrl+V"], c: 0 },
          { qE: "Shortcut key for print?", qH: "प्रिंट के लिए शॉर्टकट कुंजी?", oE: ["Ctrl+P", "Ctrl+S", "Ctrl+O", "Ctrl+N"], oH: ["Ctrl+P", "Ctrl+S", "Ctrl+O", "Ctrl+N"], c: 0 },
          { qE: "What does a firewall do?", qH: "फ़ायरवॉल क्या करता है?", oE: ["Protects against viruses", "Speeds up computer", "Increases storage", "Improves display"], oH: ["वायरस से बचाता है", "कंप्यूटर को तेज करता है", "स्टोरेज बढ़ाता है", "डिस्प्ले सुधारता है"], c: 0 },
          { qE: "Which is a web browser?", qH: "कौन सा वेब ब्राउज़र है?", oE: ["Google Chrome", "Windows", "MS Office", "Excel"], oH: ["Google Chrome", "Windows", "MS Office", "Excel"], c: 0 },
          { qE: "Full form of PDF?", qH: "PDF का पूर्ण रूप?", oE: ["Portable Document Format", "Personal Document File", "Public Data Format", "Private Document Format"], oH: ["Portable Document Format", "Personal Document File", "Public Data Format", "Private Document Format"], c: 0 },
          { qE: "Which is a storage device?", qH: "कौन सा स्टोरेज डिवाइस है?", oE: ["USB Drive", "Monitor", "Keyboard", "Mouse"], oH: ["USB ड्राइव", "मॉनिटर", "कीबोर्ड", "माउस"], c: 0 },
          { qE: "What does CPU do?", qH: "CPU क्या करता है?", oE: ["Processes instructions", "Displays output", "Takes input", "Connects to internet"], oH: ["निर्देशों को संसाधित करता है", "आउटपुट प्रदर्शित करता है", "इनपुट लेता है", "इंटरनेट से जुड़ता है"], c: 0 },
          { qE: "Which is an input device?", qH: "कौन सा इनपुट डिवाइस है?", oE: ["Keyboard", "Monitor", "Printer", "Speaker"], oH: ["कीबोर्ड", "मॉनिटर", "प्रिंटर", "स्पीकर"], c: 0 },
          { qE: "Which is an output device?", qH: "कौन सा आउटपुट डिवाइस है?", oE: ["Monitor", "Mouse", "Scanner", "Microphone"], oH: ["मॉनिटर", "माउस", "स्कैनर", "माइक्रोफोन"], c: 0 },
          { qE: "What does WiFi mean?", qH: "WiFi का क्या अर्थ है?", oE: ["Wireless Internet", "Wired Internet", "Wide Internet", "World Internet"], oH: ["वायरलेस इंटरनेट", "वायर्ड इंटरनेट", "वाइड इंटरनेट", "वर्ल्ड इंटरनेट"], c: 0 },
          { qE: "What does URL mean?", qH: "URL का क्या अर्थ है?", oE: ["Uniform Resource Locator", "Universal Resource Link", "United Resource Locator", "Uniform Regional Link"], oH: ["Uniform Resource Locator", "Universal Resource Link", "United Resource Locator", "Uniform Regional Link"], c: 0 },
          { qE: "Which is NOT a search engine?", qH: "कौन सा सर्च इंजन नहीं है?", oE: ["Google", "Bing", "Yahoo", "Facebook"], oH: ["Google", "Bing", "Yahoo", "Facebook"], c: 3 },
          { qE: "What is a smartphone?", qH: "स्मार्टफोन क्या है?", oE: ["A phone with advanced features", "A simple phone", "A desk phone", "A toy phone"], oH: ["उन्नत सुविधाओं वाला फोन", "एक साधारण फोन", "एक डेस्क फोन", "एक खिलौना फोन"], c: 0 },
          { qE: "Which is a mobile OS?", qH: "कौन सा मोबाइल OS है?", oE: ["Android", "Windows 10", "Linux", "macOS"], oH: ["Android", "Windows 10", "Linux", "macOS"], c: 0 },
          { qE: "What is an app?", qH: "ऐप क्या है?", oE: ["A software application", "A hardware device", "A type of computer", "A type of network"], oH: ["एक सॉफ्टवेयर एप्लिकेशन", "एक हार्डवेयर डिवाइस", "एक प्रकार का कंप्यूटर", "एक प्रकार का नेटवर्क"], c: 0 },
          { qE: "Which is a messaging app?", qH: "कौन सा मैसेजिंग ऐप है?", oE: ["WhatsApp", "Facebook", "Instagram", "Twitter"], oH: ["WhatsApp", "Facebook", "Instagram", "Twitter"], c: 0 },
          { qE: "What is the cloud?", qH: "क्लाउड क्या है?", oE: ["Internet-based storage", "Physical storage", "A type of computer", "A type of network"], oH: ["इंटरनेट-आधारित स्टोरेज", "भौतिक स्टोरेज", "एक प्रकार का कंप्यूटर", "एक प्रकार का नेटवर्क"], c: 0 },
          { qE: "Which is a cloud service?", qH: "कौन सी क्लाउड सेवा है?", oE: ["Google Drive", "Microsoft Word", "Adobe Photoshop", "VLC Player"], oH: ["Google Drive", "Microsoft Word", "Adobe Photoshop", "VLC Player"], c: 0 },
          { qE: "What is an email?", qH: "ईमेल क्या है?", oE: ["Electronic mail", "Electric mail", "Emerging mail", "Extended mail"], oH: ["इलेक्ट्रॉनिक मेल", "इलेक्ट्रिक मेल", "इमर्जिंग मेल", "एक्सटेंडेड मेल"], c: 0 },
          { qE: "Which is an email provider?", qH: "कौन सा ईमेल प्रदाता है?", oE: ["Gmail", "Amazon", "Flipkart", "Myntra"], oH: ["Gmail", "Amazon", "Flipkart", "Myntra"], c: 0 },
          { qE: "What does CC in email mean?", qH: "ईमेल में CC का क्या अर्थ है?", oE: ["Carbon Copy", "Creative Copy", "Central Copy", "Common Copy"], oH: ["कार्बन कॉपी", "क्रिएटिव कॉपी", "सेंट्रल कॉपी", "कॉमन कॉपी"], c: 0 },
          { qE: "What does BCC in email mean?", qH: "ईमेल में BCC का क्या अर्थ है?", oE: ["Blind Carbon Copy", "Basic Carbon Copy", "Bright Carbon Copy", "Blank Carbon Copy"], oH: ["ब्लाइंड कार्बन कॉपी", "बेसिक कार्बन कॉपी", "ब्राइट कार्बन कॉपी", "ब्लैंक कार्बन कॉपी"], c: 0 },
          { qE: "What is the subject line in an email?", qH: "ईमेल में subject line क्या है?", oE: ["Brief description", "Main body", "Attachment", "Signature"], oH: ["संक्षिप्त विवरण", "मुख्य भाग", "अटैचमेंट", "हस्ताक्षर"], c: 0 },
          { qE: "Which is a good password?", qH: "कौन सा अच्छा पासवर्ड है?", oE: ["P@ssw0rd!23", "123456", "password", "qwerty"], oH: ["P@ssw0rd!23", "123456", "password", "qwerty"], c: 0 },
          { qE: "What is a phishing attack?", qH: "फ़िशिंग अटैक क्या है?", oE: ["Fake emails to steal info", "A virus", "Hardware failure", "Network issue"], oH: ["जानकारी चुराने के लिए नकली ईमेल", "एक वायरस", "हार्डवेयर विफलता", "नेटवर्क समस्या"], c: 0 },
          { qE: "How to protect online accounts?", qH: "ऑनलाइन खातों की सुरक्षा कैसे करें?", oE: ["Use strong passwords", "Share passwords", "Write passwords on paper", "Use same password"], oH: ["मजबूत पासवर्ड का उपयोग करें", "पासवर्ड साझा करें", "पासवर्ड कागज पर लिखें", "एक ही पासवर्ड का उपयोग करें"], c: 0 },
          { qE: "What is a digital footprint?", qH: "डिजिटल फुटप्रिंट क्या है?", oE: ["Trail of data you leave online", "A type of shoe", "Physical footprint", "Fingerprint"], oH: ["ऑनलाइन छोड़े गए डेटा का निशान", "एक प्रकार का जूता", "भौतिक पदचिह्न", "उंगलियों के निशान"], c: 0 },
          { qE: "Which is a safe online practice?", qH: "कौन सी सुरक्षित ऑनलाइन प्रथा है?", oE: ["Not sharing personal info", "Sharing passwords", "Posting everything", "Download from unknown links"], oH: ["व्यक्तिगत जानकारी साझा न करना", "पासवर्ड साझा करना", "सब कुछ पोस्ट करना", "अज्ञात लिंक से डाउनलोड करना"], c: 0 },
          { qE: "What is OTP?", qH: "OTP क्या है?", oE: ["One Time Password", "Open Transfer Protocol", "Online Transaction Process", "Original Test Program"], oH: ["वन टाइम पासवर्ड", "ओपन ट्रांसफर प्रोटोकॉल", "ऑनलाइन ट्रांजेक्शन प्रोसेस", "ओरिजिनल टेस्ट प्रोग्राम"], c: 0 },
          { qE: "Which is an online payment method?", qH: "कौन सा ऑनलाइन भुगतान तरीका है?", oE: ["UPI", "Cash", "Cheque", "Demand Draft"], oH: ["UPI", "नकद", "चेक", "डिमांड ड्राफ्ट"], c: 0 },
          { qE: "What does UPI mean?", qH: "UPI का क्या अर्थ है?", oE: ["Unified Payments Interface", "United Payment Interface", "Universal Payment Interface", "Unique Payment Interface"], oH: ["यूनिफाइड पेमेंट्स इंटरफेस", "यूनाइटेड पेमेंट इंटरफेस", "यूनिवर्सल पेमेंट इंटरफेस", "यूनिक पेमेंट इंटरफेस"], c: 0 },
          { qE: "Which is a UPI app?", qH: "कौन सा UPI ऐप है?", oE: ["Google Pay", "Instagram", "YouTube", "Spotify"], oH: ["Google Pay", "Instagram", "YouTube", "Spotify"], c: 0 },
          { qE: "What is a QR code?", qH: "QR कोड क्या है?", oE: ["Quick Response code", "Quality Review code", "Quick Read code", "Quantum Response code"], oH: ["क्विक रिस्पांस कोड", "क्वालिटी रिव्यू कोड", "क्विक रीड कोड", "क्वांटम रिस्पांस कोड"], c: 0 },
          { qE: "How to scan a QR code?", qH: "QR कोड कैसे स्कैन करें?", oE: ["Using phone camera", "Using scanner", "Using printer", "Using keyboard"], oH: ["फोन कैमरे का उपयोग करके", "स्कैनर का उपयोग करके", "प्रिंटर का उपयोग करके", "कीबोर्ड का उपयोग करके"], c: 0 },
          { qE: "Which is an online shopping site?", qH: "कौन सी ऑनलाइन शॉपिंग साइट है?", oE: ["Amazon", "Google", "Facebook", "YouTube"], oH: ["Amazon", "Google", "Facebook", "YouTube"], c: 0 },
          { qE: "What is a digital wallet?", qH: "डिजिटल वॉलेट क्या है?", oE: ["App to store money digitally", "Physical wallet", "Credit card", "Bank passbook"], oH: ["पैसे को डिजिटल रूप से स्टोर करने के लिए ऐप", "भौतिक बटुआ", "क्रेडिट कार्ड", "बैंक पासबुक"], c: 0 },
          { qE: "Which is a digital wallet?", qH: "कौन सा डिजिटल वॉलेट है?", oE: ["Paytm", "Google Drive", "Microsoft Word", "Adobe Reader"], oH: ["Paytm", "Google Drive", "Microsoft Word", "Adobe Reader"], c: 0 },
          { qE: "What does SSL mean?", qH: "SSL का क्या अर्थ है?", oE: ["Secure Sockets Layer", "System Security Layer", "Simple Socket Layer", "Standard Socket Layer"], oH: ["सिक्योर सॉकेट्स लेयर", "सिस्टम सिक्योरिटी लेयर", "सिंपल सॉकेट लेयर", "स्टैंडर्ड सॉकेट लेयर"], c: 0 },
          { qE: "How to know a website is safe?", qH: "कैसे पता करें कि कोई वेबसाइट सुरक्षित है?", oE: ["Look for 'https'", "Look for 'http'", "Look for red lock", "Look for ads"], oH: ["'https' देखें", "'http' देखें", "लाल लॉक देखें", "विज्ञापन देखें"], c: 0 },
          { qE: "Which is NOT a good security practice?", qH: "कौन सी अच्छी सुरक्षा प्रथा नहीं है?", oE: ["Using public WiFi for banking", "Updating software", "Using antivirus", "Using strong passwords"], oH: ["बैंकिंग के लिए सार्वजनिक WiFi का उपयोग करना", "सॉफ्टवेयर अपडेट करना", "एंटीवायरस का उपयोग करना", "मजबूत पासवर्ड का उपयोग करना"], c: 0 },
          { qE: "What is a virus in computers?", qH: "कंप्यूटर में वायरस क्या है?", oE: ["Malicious software", "Hardware", "Web browser", "Search engine"], oH: ["दुर्भावनापूर्ण सॉफ्टवेयर", "हार्डवेयर", "वेब ब्राउज़र", "सर्च इंजन"], c: 0 },
          { qE: "What is antivirus used for?", qH: "एंटीवायरस का उपयोग किस लिए किया जाता है?", oE: ["Protecting against malware", "Speeding up computer", "Creating documents", "Editing photos"], oH: ["मैलवेयर से बचाना", "कंप्यूटर को तेज करना", "दस्तावेज़ बनाना", "फ़ोटो संपादित करना"], c: 0 }
        ]
      },

      // ---- MODULE 4: Financial Literacy (110 Qs) ----
      "Module 4: Financial Literacy": {
        questions: [
          { qE: "Financial literacy is understanding the way money is _____.", qH: "वित्तीय साक्षरता पैसे के _____ तरीके को समझना है।", oE: ["saved", "spent", "invested", "saved, spent & invested"], oH: ["बचत", "खर्च", "निवेश", "बचत, खर्च और निवेश"], c: 3 },
          { qE: "Costly things not essential for survival are _____.", qH: "जीवन के लिए आवश्यक नहीं होने वाली महंगी चीजें _____ हैं।", oE: ["Needs", "Money", "Luxuries", "Savings"], oH: ["ज़रूरतें", "पैसा", "विलासिता", "बचत"], c: 2 },
          { qE: "Things needed for survival are _____.", qH: "जीवन के लिए आवश्यक चीजें _____ हैं।", oE: ["Wants", "Needs", "Savings", "Expenses"], oH: ["इच्छाएँ", "ज़रूरतें", "बचत", "खर्च"], c: 1 },
          { qE: "Sunitha saves Rs.2000 every month. She will use it in case of _____.", qH: "सुनीता हर महीने 2000 रुपये बचाती है। वह इसका उपयोग _____ के मामले में करेगी।", oE: ["emergencies", "party", "bills", "travel"], oH: ["आपातकाल", "पार्टी", "बिल", "यात्रा"], c: 0 },
          { qE: "Gopi spends on movies, groceries, rent, clothes. Where can he reduce expenses?", qH: "गोपी मूवी, किराना, किराया, कपड़ों पर खर्च करता है। वह कहाँ खर्च कम कर सकता है?", oE: ["Clothes", "House rent", "Movies", "Groceries"], oH: ["कपड़े", "घर का किराया", "मूवी", "किराना"], c: 2 },
          { qE: "All financial activity can be done through a _____.", qH: "सभी वित्तीय गतिविधियाँ एक _____ के माध्यम से की जा सकती हैं।", oE: ["Bank", "School", "College", "Workplace"], oH: ["बैंक", "स्कूल", "कॉलेज", "कार्यस्थल"], c: 0 },
          { qE: "Institution licensed by government to keep money safe is _____.", qH: "पैसे सुरक्षित रखने के लिए सरकार द्वारा लाइसेंस प्राप्त संस्थान _____ है।", oE: ["Hospital", "Bank", "Panchayat", "Assembly"], oH: ["अस्पताल", "बैंक", "पंचायत", "विधानसभा"], c: 1 },
          { qE: "When a person deposits a fixed sum every month, it is a _____ account.", qH: "जब कोई व्यक्ति हर महीने एक निश्चित राशि जमा करता है, तो यह एक _____ खाता है।", oE: ["Recurring Deposit", "Saving Account", "Current Account", "Fixed Deposit"], oH: ["आवर्ती जमा", "बचत खाता", "चालू खाता", "सावधि जमा"], c: 0 },
          { qE: "Arya's company credits salary to which account?", qH: "आर्या की कंपनी वेतन किस खाते में जमा करती है?", oE: ["Fixed deposit", "Recurring deposit", "Salary account", "Current account"], oH: ["सावधि जमा", "आवर्ती जमा", "वेतन खाता", "चालू खाता"], c: 2 },
          { qE: "How can Avinash get last month's transaction details?", qH: "अविनाश को पिछले महीने के लेन-देन का विवरण कैसे मिल सकता है?", oE: ["Passbook", "Debit Card", "Credit card", "Cheque book"], oH: ["पासबुक", "डेबिट कार्ड", "क्रेडिट कार्ड", "चेकबुक"], c: 0 },
          { qE: "What is an easy and quick way to make online payments?", qH: "ऑनलाइन भुगतान करने का आसान और त्वरित तरीका क्या है?", oE: ["Digital wallets", "Cheque", "Cash on delivery", "Going to bank"], oH: ["डिजिटल वॉलेट", "चेक", "कैश ऑन डिलीवरी", "बैंक जाना"], c: 0 },
          { qE: "Which is NOT a digital wallet?", qH: "कौन सा डिजिटल वॉलेट नहीं है?", oE: ["MobiKwik", "Paytm", "PhonePe", "Internet Explorer"], oH: ["MobiKwik", "Paytm", "PhonePe", "Internet Explorer"], c: 3 },
          { qE: "A _____ is a square, black and white code.", qH: "एक _____ एक वर्गाकार, काला और सफेद कोड है।", oE: ["QR Code", "Password", "OTP", "User ID"], oH: ["QR कोड", "पासवर्ड", "OTP", "उपयोगकर्ता ID"], c: 0 },
          { qE: "On a bank holiday, which method CANNOT be used?", qH: "बैंक अवकाश पर, कौन सी विधि का उपयोग नहीं किया जा सकता है?", oE: ["BHIM app", "Google Pay", "Deposit at bank branch", "Amazon Pay"], oH: ["BHIM ऐप", "Google Pay", "बैंक शाखा में जमा", "Amazon Pay"], c: 2 },
          { qE: "Sam can receive payments into his account using _____.", qH: "सैम अपने खाते में _____ का उपयोग करके भुगतान प्राप्त कर सकता है।", oE: ["Movie ticket", "QR code", "Library card", "Gift card"], oH: ["मूवी टिकट", "QR कोड", "लाइब्रेरी कार्ड", "गिफ्ट कार्ड"], c: 1 },
          { qE: "Regular payment made by employer to employee is _____.", qH: "नियोक्ता द्वारा कर्मचारी को किया जाने वाला नियमित भुगतान _____ है।", oE: ["Appraisal", "Debt", "Loan", "Salary"], oH: ["मूल्यांकन", "ऋण", "ऋण", "वेतन"], c: 3 },
          { qE: "Deductions are taken from the _____.", qH: "कटौती _____ से की जाती है।", oE: ["Gross salary", "Net Salary", "Earnings", "Basic Salary"], oH: ["सकल वेतन", "शुद्ध वेतन", "आय", "मूल वेतन"], c: 0 },
          { qE: "The government collects _____ from citizens.", qH: "सरकार नागरिकों से _____ एकत्र करती है।", oE: ["Loan", "Tax", "Deductions", "Conveyance"], oH: ["ऋण", "कर", "कटौती", "परिवहन"], c: 1 },
          { qE: "Karthik's Rs.3 lakhs per year is his _____ salary.", qH: "कर्थिक का 3 लाख रुपये प्रति वर्ष उसका _____ वेतन है।", oE: ["Monthly", "Basic", "Net", "Gross"], oH: ["मासिक", "मूल", "शुद्ध", "सकल"], c: 3 },
          { qE: "The amount put aside without being spent is _____.", qH: "बिना खर्च किए अलग रखी गई राशि _____ है।", oE: ["Savings", "Bill", "Tax", "Deductions"], oH: ["बचत", "बिल", "कर", "कटौती"], c: 0 },
          { qE: "Money put aside for a big expense many years from now is _____ savings.", qH: "कई वर्षों बाद एक बड़े खर्च के लिए अलग रखा गया पैसा _____ बचत है।", oE: ["Long term", "Goal", "Emergency", "Short term"], oH: ["दीर्घकालिक", "लक्ष्य", "आपातकालीन", "अल्पकालिक"], c: 0 },
          { qE: "Which saving option for buying an expensive bike?", qH: "महंगी बाइक खरीदने के लिए कौन सा बचत विकल्प?", oE: ["Long term", "Goal savings", "Emergency", "None"], oH: ["दीर्घकालिक", "लक्ष्य बचत", "आपातकालीन", "कोई नहीं"], c: 1 },
          { qE: "Rajesh wants to save Rs.6000/year. How much per month?", qH: "राजेश 6000 रुपये/वर्ष बचाना चाहता है। प्रति माह कितना?", oE: ["100", "500", "50", "6000"], oH: ["100", "500", "50", "6000"], c: 1 },
          { qE: "Money borrowed from bank is called _____.", qH: "बैंक से उधार लिया गया पैसा _____ कहलाता है।", oE: ["Tax", "Gift", "Interest", "Loan"], oH: ["कर", "उपहार", "ब्याज", "ऋण"], c: 3 },
          { qE: "Benefit of paying insurance regularly?", qH: "नियमित रूप से बीमा भुगतान का क्या लाभ है?", oE: ["Free entertainment", "Covers travel expenses", "Manages emergencies", "Increases savings"], oH: ["मुफ्त मनोरंजन", "यात्रा खर्च को कवर करता है", "आपात स्थितियों का प्रबंधन करता है", "बचत बढ़ाता है"], c: 2 },
          { qE: "Extra amount paid for borrowing money is _____.", qH: "पैसे उधार लेने के लिए भुगतान की जाने वाली अतिरिक्त राशि _____ है।", oE: ["Loan", "Interest", "Hidden charges", "Processing charges"], oH: ["ऋण", "ब्याज", "छिपे हुए शुल्क", "प्रसंस्करण शुल्क"], c: 1 },
          { qE: "Rita wants to pursue higher education. Which loan?", qH: "रीता उच्च शिक्षा प्राप्त करना चाहती है। कौन सा ऋण?", oE: ["Home loan", "Personal loan", "Education loan", "Auto loan"], oH: ["गृह ऋण", "व्यक्तिगत ऋण", "शिक्षा ऋण", "ऑटो ऋण"], c: 2 },
          { qE: "Priya wants to purchase a bike. Which loan?", qH: "प्रिया एक बाइक खरीदना चाहती है। कौन सा ऋण?", oE: ["Home loan", "Personal loan", "Education loan", "Auto loan"], oH: ["गृह ऋण", "व्यक्तिगत ऋण", "शिक्षा ऋण", "ऑटो ऋण"], c: 3 },
          { qE: "Knowledge and awareness of laws is called _____.", qH: "कानूनों का ज्ञान और जागरूकता _____ कहलाती है।", oE: ["Digital literacy", "Legal literacy", "Financial literacy", "English literacy"], oH: ["डिजिटल साक्षरता", "कानूनी साक्षरता", "वित्तीय साक्षरता", "अंग्रेजी साक्षरता"], c: 1 },
          { qE: "RTI stands for _____.", qH: "RTI का पूर्ण रूप _____ है।", oE: ["Road Transport Institute", "Right to Insurance", "Right to Inform", "Right to Information"], oH: ["सड़क परिवहन संस्थान", "बीमा का अधिकार", "सूचित करने का अधिकार", "सूचना का अधिकार"], c: 3 },
          { qE: "Online portal for government complaints is _____.", qH: "सरकारी शिकायतों के लिए ऑनलाइन पोर्टल _____ है।", oE: ["Public grievances portal", "Place grievances portal", "Public informing portal", "Public information portal"], oH: ["सार्वजनिक शिकायत पोर्टल", "स्थान शिकायत पोर्टल", "सार्वजनिक सूचना पोर्टल", "सार्वजनिक सूचना पोर्टल"], c: 0 },
          { qE: "Sudha delivered a baby. How many weeks of maternity leave?", qH: "सुधा ने बच्चे को जन्म दिया। कितने सप्ताह का मातृत्व अवकाश?", oE: ["2 months", "5 months", "26 weeks", "One year"], oH: ["2 महीने", "5 महीने", "26 सप्ताह", "एक वर्ष"], c: 2 },
          { qE: "What is the minimum age to open a bank account in India?", qH: "भारत में बैंक खाता खोलने के लिए न्यूनतम आयु क्या है?", oE: ["18 years", "16 years", "21 years", "14 years"], oH: ["18 वर्ष", "16 वर्ष", "21 वर्ष", "14 वर्ष"], c: 0 },
          { qE: "What is the full form of ATM?", qH: "ATM का पूर्ण रूप क्या है?", oE: ["Automated Teller Machine", "Automatic Transfer Machine", "Automated Transaction Machine", "Automatic Teller Module"], oH: ["ऑटोमेटेड टेलर मशीन", "ऑटोमैटिक ट्रांसफर मशीन", "ऑटोमेटेड ट्रांजेक्शन मशीन", "ऑटोमैटिक टेलर मॉड्यूल"], c: 0 },
          { qE: "What is a PIN?", qH: "PIN क्या है?", oE: ["Personal Identification Number", "Public Identification Number", "Private Identification Number", "Password Identification Number"], oH: ["व्यक्तिगत पहचान संख्या", "सार्वजनिक पहचान संख्या", "निजी पहचान संख्या", "पासवर्ड पहचान संख्या"], c: 0 }
        ]
      }
    }
  }
};
// ================================================================
// PART 2 - SECOND YEAR (500+ BILINGUAL QUESTIONS)
// EMPLOYABILITY SKILLS - ITI STUDY CENTRE
// ================================================================

// ---------- MERGE THIS WITH PART 1 IN THE SAME OBJECT ----------
// यह कोड "EMPLOYABILITY_BANK" ऑब्जेक्ट में "2nd Year" की जगह डालें

"2nd Year": {
  modules: {

    // ---- MODULE 1: Basic Career Skills (100 Qs) ----
    "Module 1: Basic Career Skills": {
      questions: [
        { qE: "What is formal communication?", qH: "औपचारिक संचार क्या है?", oE: ["All written communication", "Official communication following a set of rules", "Talking with friends and family", "Casual chatting on social media"], oH: ["सभी लिखित संचार", "नियमों के एक सेट के अनुसार आधिकारिक संचार", "दोस्तों और परिवार के साथ बात करना", "सोशल मीडिया पर अनौपचारिक चैट"], c: 1 },
        { qE: "Which is a formal introduction in a job interview?", qH: "नौकरी के साक्षात्कार में औपचारिक परिचय कौन सा है?", oE: ["'Hey there! I'm Parmeet'", "'Hi, I'm Parmeet. Thanks for having me!'", "'Yo, I'm Parmeet'", "'Good morning. I am Parmeet and I want to thank you for considering me for this role.'"], oH: ["'अरे! मैं परमीत हूँ'", "'हाय, मैं परमीत हूँ। मुझे रखने के लिए धन्यवाद!'", "'यो, मैं परमीत हूँ'", "'सुप्रभात। मैं परमीत हूँ और मैं इस भूमिका के लिए मुझ पर विचार करने के लिए आपको धन्यवाद देना चाहता हूँ।'"], c: 3 },
        { qE: "What is an example of formal written communication?", qH: "औपचारिक लिखित संचार का एक उदाहरण क्या है?", oE: ["Texting a friend", "Sending a WhatsApp message", "Writing an email to your manager", "Posting on social media"], oH: ["मित्र को टेक्स्ट करना", "व्हाट्सएप संदेश भेजना", "अपने प्रबंधक को ईमेल लिखना", "सोशल मीडिया पर पोस्ट करना"], c: 2 },
        { qE: "If you didn't hear a question in an interview, what should you say?", qH: "यदि आपने साक्षात्कार में कोई प्रश्न नहीं सुना, तो आपको क्या कहना चाहिए?", oE: ["'Sorry! Could you please repeat?'", "'Hey, can you repeat?'", "'I am lost. Say it again.'", "'Speak clearly.'"], oH: ["'क्षमा करें! क्या आप कृपया दोहरा सकते हैं?'", "'अरे, क्या आप दोहरा सकते हैं?'", "'मैं समझ नहीं पाया। इसे फिर से कहें।'", "'स्पष्ट बोलें।'"], c: 0 },
        { qE: "How should Ramesh describe his strengths in an interview?", qH: "रमेश को साक्षात्कार में अपनी ताकत का वर्णन कैसे करना चाहिए?", oE: ["'I'm good at many things.'", "'I guess I can do everything.'", "'My top skills are problem-solving, teamwork, and attention to detail.'", "'I don't know.'"], oH: ["'मैं बहुत सी चीज़ों में अच्छा हूँ।'", "'मुझे लगता है कि मैं सब कुछ कर सकता हूँ।'", "'मेरे शीर्ष कौशल समस्या-समाधान, टीमवर्क और विस्तार पर ध्यान देना हैं।'", "'मुझे नहीं पता।'"], c: 2 },
        { qE: "What is informal communication?", qH: "अनौपचारिक संचार क्या है?", oE: ["All verbal communication", "Official communication", "Casual conversations outside official work", "Talking at official meetings"], oH: ["सभी मौखिक संचार", "आधिकारिक संचार", "आधिकारिक कार्य के बाहर अनौपचारिक बातचीत", "आधिकारिक बैठकों में बात करना"], c: 2 },
        { qE: "Which are informal situations at workplace?", qH: "कार्यस्थल पर अनौपचारिक स्थितियाँ कौन सी हैं?", oE: ["Canteen meal", "Water cooler chat", "Lobby waiting", "All of these"], oH: ["कैंटीन भोजन", "वॉटर कूलर पर बातचीत", "लॉबी में प्रतीक्षा", "ये सभी"], c: 3 },
        { qE: "What is an advantage of informal communication?", qH: "अनौपचारिक संचार का क्या लाभ है?", oE: ["Helps teamwork", "Makes things formal", "Creates strictness", "Makes people talk less"], oH: ["टीम वर्क में मदद करता है", "चीजों को औपचारिक बनाता है", "कठोरता पैदा करता है", "लोगों को कम बोलने पर मजबूर करता है"], c: 0 },
        { qE: "What is workplace etiquette?", qH: "कार्यस्थल शिष्टाचार क्या है?", oE: ["Manners outside work", "Proper behavior based on respect", "Casual behavior", "None of these"], oH: ["काम के बाहर शिष्टाचार", "सम्मान पर आधारित उचित व्यवहार", "अनौपचारिक व्यवहार", "इनमें से कोई नहीं"], c: 1 },
        { qE: "Which is appropriate workplace behavior?", qH: "कौन सा उचित कार्यस्थल व्यवहार है?", oE: ["Being late", "Interrupting others", "Talking loudly on phone", "Maintaining clean workspace"], oH: ["देर से आना", "दूसरों को बीच में रोकना", "फोन पर जोर से बात करना", "स्वच्छ कार्यस्थल बनाए रखना"], c: 3 },
        { qE: "Which behavior is inappropriate in the workplace?", qH: "कार्यस्थल पर कौन सा व्यवहार अनुचित है?", oE: ["Clean workspace", "Polite speech", "Tapping repeatedly on desk", "Focus on tasks"], oH: ["स्वच्छ कार्यस्थल", "विनम्र बोली", "डेस्क पर बार-बार टैप करना", "कार्यों पर ध्यान देना"], c: 2 },
        { qE: "What should Aisha do during a team meeting?", qH: "टीम मीटिंग के दौरान आयशा को क्या करना चाहिए?", oE: ["Check phone", "Chat non-work", "Interrupt speaker", "Put phone on silent and participate"], oH: ["फोन चेक करना", "गैर-कार्य चैट करना", "वक्ता को बीच में रोकना", "फोन को साइलेंट पर रखें और भाग लें"], c: 3 },
        { qE: "Arjun overhears gossip. What should he do?", qH: "अर्जुन गपशप सुनता है। उसे क्या करना चाहिए?", oE: ["Tell them it's inappropriate", "Join the gossip", "Tell someone else", "Just listen"], oH: ["उन्हें बताएं कि यह अनुचित है", "गपशप में शामिल हों", "किसी और को बताएं", "बस सुनें"], c: 0 },
        { qE: "Which statement shows good teamwork?", qH: "कौन सा कथन अच्छी टीम वर्क दिखाता है?", oE: ["Keeping ideas to yourself", "Criticizing teammates", "Working together towards a common goal", "Ignoring others' ideas"], oH: ["विचारों को अपने तक रखना", "टीम के साथियों की आलोचना करना", "एक सामान्य लक्ष्य की ओर एक साथ काम करना", "दूसरों के विचारों की अनदेखी करना"], c: 2 },
        { qE: "Which is NOT needed for teamwork?", qH: "टीम वर्क के लिए किसकी आवश्यकता नहीं है?", oE: ["Healthy communication", "Division of work", "Conflict and argument", "Trust"], oH: ["स्वस्थ संचार", "कार्य का विभाजन", "संघर्ष और बहस", "विश्वास"], c: 2 },
        { qE: "Ravi is a good team player. What does he do?", qH: "रवि एक अच्छा टीम खिलाड़ी है। वह क्या करता है?", oE: ["Gets angry", "Shares ideas to help the team", "Thinks he can't make mistakes", "Ignores others"], oH: ["गुस्सा होता है", "टीम की मदद के लिए विचार साझा करता है", "सोचता है कि वह गलती नहीं कर सकता", "दूसरों की अनदेखी करता है"], c: 1 },
        { qE: "How to celebrate team success?", qH: "टीम की सफलता का जश्न कैसे मनाएं?", oE: ["Take all credit", "Blame errors", "Don't celebrate", "Thank everyone"], oH: ["सारा श्रेय लें", "त्रुटियों को दोष दें", "जश्न न मनाएं", "सभी को धन्यवाद दें"], c: 3 },
        { qE: "What to do if a teammate struggles?", qH: "यदि कोई सहयोगी संघर्ष कर रहा है तो क्या करें?", oE: ["Ignore them", "Offer to help and support", "Criticize them", "Complain to boss"], oH: ["उनकी अनदेखी करें", "मदद और सहायता की पेशकश करें", "उनकी आलोचना करें", "बॉस से शिकायत करें"], c: 1 },
        { qE: "How have workplaces changed after COVID?", qH: "COVID के बाद कार्यस्थल कैसे बदल गए हैं?", oE: ["More technology", "Flexible hours", "Mix of in-person and work-from-home", "All of the above"], oH: ["अधिक प्रौद्योगिकी", "लचीले घंटे", "व्यक्तिगत और घर से काम का मिश्रण", "उपरोक्त सभी"], c: 3 },
        { qE: "What is an example of being open to learning at work?", qH: "कार्य पर सीखने के लिए खुले रहने का उदाहरण क्या है?", oE: ["Refusing training", "Accepting and adapting to changes", "Avoiding feedback", "Ignoring tech advancements"], oH: ["प्रशिक्षण से इनकार करना", "परिवर्तनों को स्वीकार करना और अनुकूलित करना", "प्रतिक्रिया से बचना", "प्रौद्योगिकी प्रगति की अनदेखी करना"], c: 1 },
        { qE: "How can Irfan prepare for the future of work?", qH: "इरफ़ान कार्य के भविष्य के लिए कैसे तैयार हो सकता है?", oE: ["Learn TikTok reels", "Avoid learning new skills", "Master internet skills", "Avoid building relationships"], oH: ["टिकटॉक रील्स सीखें", "नए कौशल सीखने से बचें", "इंटरनेट कौशल में महारत हासिल करें", "रिश्ते बनाने से बचें"], c: 2 },
        { qE: "What is an important future workplace skill?", qH: "एक महत्वपूर्ण भविष्य का कार्यस्थल कौशल क्या है?", oE: ["Doing paperwork", "Manual work", "Networking and relationship-building", "Planning holidays"], oH: ["कागजी कार्रवाई करना", "शारीरिक कार्य", "नेटवर्किंग और संबंध-निर्माण", "छुट्टियों की योजना बनाना"], c: 2 },
        { qE: "Raghav is nervous about digital tablets. What should he do?", qH: "राघव डिजिटल टैबलेट को लेकर घबरा गया है। उसे क्या करना चाहिए?", oE: ["Complain", "Ask coworkers to do it", "Quit job", "Keep an open mind and ask coworkers to teach"], oH: ["शिकायत करें", "सहकर्मियों से करने को कहें", "नौकरी छोड़ दें", "खुले दिमाग रखें और सहकर्मियों से सिखाने को कहें"], c: 3 },
        { qE: "What best describes the gig economy?", qH: "गिग इकोनॉमी का सबसे अच्छा वर्णन क्या है?", oE: ["Full-time for one employer", "Part-time or temporary jobs", "Fixed monthly salary", "Fixed work hours"], oH: ["एक नियोक्ता के लिए पूर्णकालिक", "अंशकालिक या अस्थायी नौकरियाँ", "निश्चित मासिक वेतन", "निश्चित कार्य घंटे"], c: 1 },
        { qE: "What is a 'gig'?", qH: "'गिग' क्या है?", oE: ["Full-time job", "9-5 job", "A specific task or project", "None of these"], oH: ["पूर्णकालिक नौकरी", "9-5 नौकरी", "एक विशिष्ट कार्य या परियोजना", "इनमें से कोई नहीं"], c: 2 },
        { qE: "A _____ helps gig workers find customers.", qH: "एक _____ गिग श्रमिकों को ग्राहक खोजने में मदद करता है।", oE: ["Netflix", "platform/app", "school", "bank"], oH: ["नेटफ्लिक्स", "प्लेटफार्म/ऐप", "स्कूल", "बैंक"], c: 1 },
        { qE: "How can Seema find gig work?", qH: "सीमा गिग कार्य कैसे ढूंढ सकती है?", oE: ["Find a Gig platform", "Connect with community", "Update resume", "All of these"], oH: ["एक गिग प्लेटफॉर्म खोजें", "समुदाय से जुड़ें", "रिज्यूमे अपडेट करें", "ये सभी"], c: 3 },
        { qE: "Best platform for Sultan (electrician) to find gig work?", qH: "सुल्तान (इलेक्ट्रीशियन) के लिए गिग कार्य खोजने का सबसे अच्छा प्लेटफॉर्म?", oE: ["Amazon", "Zoom", "Uber", "Urban Company"], oH: ["Amazon", "Zoom", "Uber", "Urban Company"], c: 3 },
        { qE: "What is a resume?", qH: "रिज्यूमे क्या है?", oE: ["List of qualifications", "Letter of recommendation", "Job application", "Cover letter"], oH: ["योग्यता की सूची", "सिफारिश पत्र", "नौकरी आवेदन", "कवर लेटर"], c: 0 },
        { qE: "What is a cover letter?", qH: "कवर लेटर क्या है?", oE: ["Letter accompanying resume", "List of references", "Job description", "Application form"], oH: ["रिज्यूमे के साथ भेजा जाने वाला पत्र", "संदर्भों की सूची", "नौकरी विवरण", "आवेदन पत्र"], c: 0 },
        { qE: "What is the layout of a resume?", qH: "रिज्यूमे का लेआउट क्या है?", oE: ["How it looks and is organized", "Content", "Length", "Font"], oH: ["यह कैसा दिखता है और व्यवस्थित है", "सामग्री", "लंबाई", "फ़ॉन्ट"], c: 0 },
        { qE: "What is most important in a resume?", qH: "रिज्यूमे में सबसे महत्वपूर्ण क्या है?", oE: ["Correct contact details", "Fancy design", "Long description", "Multiple colors"], oH: ["सही संपर्क विवरण", "फैंसी डिज़ाइन", "लंबा विवरण", "कई रंग"], c: 0 },
        { qE: "What should you highlight in your resume?", qH: "आपको अपने रिज्यूमे में क्या उजागर करना चाहिए?", oE: ["Skills matching the job", "All skills", "Hobbies", "Family details"], oH: ["नौकरी से मेल खाने वाले कौशल", "सभी कौशल", "शौक", "पारिवारिक विवरण"], c: 0 },
        { qE: "Why tailor your resume for each job?", qH: "प्रत्येक नौकरी के लिए अपना रिज्यूमे क्यों तैयार करें?", oE: ["To match job requirements", "To use same resume", "To save time", "To impress friends"], oH: ["नौकरी की आवश्यकताओं से मेल खाने के लिए", "एक ही रिज्यूमे का उपयोग करने के लिए", "समय बचाने के लिए", "दोस्तों को प्रभावित करने के लिए"], c: 0 },
        { qE: "Recommended font size for a resume?", qH: "रिज्यूमे के लिए अनुशंसित फ़ॉन्ट आकार?", oE: ["10-12 pts", "14-16 pts", "18-20 pts", "6-8 pts"], oH: ["10-12 pts", "14-16 pts", "18-20 pts", "6-8 pts"], c: 0 },
        { qE: "What is a career objective in a resume?", qH: "रिज्यूमे में करियर उद्देश्य क्या है?", oE: ["Career goals", "Hobbies", "Family", "Salary expectations"], oH: ["करियर लक्ष्य", "शौक", "परिवार", "वेतन अपेक्षाएँ"], c: 0 },
        { qE: "What is a soft skill?", qH: "सॉफ्ट स्किल क्या है?", oE: ["Communication and teamwork", "Technical skill", "Driving skill", "Cooking skill"], oH: ["संचार और टीम वर्क", "तकनीकी कौशल", "ड्राइविंग कौशल", "खाना पकाने का कौशल"], c: 0 },
        { qE: "What is a hard skill?", qH: "हार्ड स्किल क्या है?", oE: ["Technical skill for a job", "Soft skill", "Communication skill", "Teamwork skill"], oH: ["नौकरी के लिए तकनीकी कौशल", "सॉफ्ट स्किल", "संचार कौशल", "टीम वर्क कौशल"], c: 0 },
        { qE: "What does 'professional' mean?", qH: "'प्रोफेशनल' का क्या अर्थ है?", oE: ["Showing competence", "Casual behavior", "Rude behavior", "Lazy behavior"], oH: ["क्षमता दिखाना", "अनौपचारिक व्यवहार", "अशिष्ट व्यवहार", "आलसी व्यवहार"], c: 0 },
        { qE: "What does 'punctuality' mean?", qH: "'पंचुअलिटी' का क्या अर्थ है?", oE: ["Being on time", "Being late", "Being early", "Being absent"], oH: ["समय पर होना", "देर से होना", "जल्दी होना", "अनुपस्थित होना"], c: 0 },
        { qE: "What does 'integrity' mean?", qH: "'इंटीग्रिटी' का क्या अर्थ है?", oE: ["Being honest", "Being dishonest", "Being lazy", "Being rude"], oH: ["ईमानदार होना", "बेईमान होना", "आलसी होना", "अशिष्ट होना"], c: 0 },
        { qE: "What does 'accountability' mean?", qH: "'अकाउंटेबिलिटी' का क्या अर्थ है?", oE: ["Being responsible", "Avoiding responsibility", "Blaming others", "Ignoring mistakes"], oH: ["जिम्मेदार होना", "जिम्मेदारी से बचना", "दूसरों को दोष देना", "गलतियों को अनदेखा करना"], c: 0 }
      ]
    },

    // ---- MODULE 2: Future Work Skills (100 Qs) ----
    "Module 2: Future Work Skills": {
      questions: [
        { qE: "What does self-employment mean?", qH: "स्वरोजगार का क्या अर्थ है?", oE: ["Working for a single employer", "Working independently and earning directly", "Fixed monthly salary", "Working part-time from home"], oH: ["एकल नियोक्ता के लिए काम करना", "स्वतंत्र रूप से काम करना और सीधे कमाना", "निश्चित मासिक वेतन", "घर से अंशकालिक काम करना"], c: 1 },
        { qE: "What is a benefit of self-employment?", qH: "स्वरोजगार का क्या लाभ है?", oE: ["Direct earnings", "Fixed working hours", "Monthly salary", "Limited control"], oH: ["प्रत्यक्ष कमाई", "निश्चित कार्य घंटे", "मासिक वेतन", "सीमित नियंत्रण"], c: 0 },
        { qE: "Which is an example of self-employment?", qH: "स्वरोजगार का उदाहरण कौन सा है?", oE: ["Working at a company", "Taxi driver", "University student", "Personal tutor"], oH: ["कंपनी में काम करना", "टैक्सी ड्राइवर", "विश्वविद्यालय के छात्र", "निजी ट्यूटर"], c: 3 },
        { qE: "How to become self-employed?", qH: "स्वरोजगार कैसे बनें?", oE: ["Learn and take courses", "Try small scale", "Spread word through ads", "All of these"], oH: ["सीखें और पाठ्यक्रम लें", "छोटे पैमाने पर प्रयास करें", "विज्ञापनों के माध्यम से शब्द फैलाएं", "ये सभी"], c: 3 },
        { qE: "Rohan loves photography. What should he do to start?", qH: "रोहन को फोटोग्राफी पसंद है। शुरू करने के लिए उसे क्या करना चाहिए?", oE: ["Buy expensive equipment", "Take random photos", "Learn photography", "Start advertising without planning"], oH: ["महंगा उपकरण खरीदें", "यादृच्छिक तस्वीरें लें", "फोटोग्राफी सीखें", "बिना योजना के विज्ञापन शुरू करें"], c: 2 },
        { qE: "What does migrating for work mean?", qH: "काम के लिए प्रवास का क्या अर्थ है?", oE: ["Staying in same place", "Changing jobs in same city", "Moving to different place for work", "Working from home"], oH: ["एक ही स्थान पर रहना", "एक ही शहर में नौकरी बदलना", "काम के लिए अलग जगह जाना", "घर से काम करना"], c: 2 },
        { qE: "Why do people migrate for work?", qH: "लोग काम के लिए क्यों प्रवास करते हैं?", oE: ["Learn new languages", "Better job opportunities", "Spend time with family", "Explore new places"], oH: ["नई भाषाएँ सीखना", "बेहतर नौकरी के अवसर", "परिवार के साथ समय बिताना", "नई जगहों की खोज करना"], c: 1 },
        { qE: "Sneha is moving for work. What should she think about?", qH: "स्नेहा काम के लिए जा रही है। उसे क्या सोचना चाहिए?", oE: ["Cost of travel/living", "Job growth", "Earning and saving", "All of these"], oH: ["यात्रा/रहने की लागत", "नौकरी में वृद्धि", "कमाई और बचत", "ये सभी"], c: 3 },
        { qE: "Rahul moving to Qatar. How to migrate safely?", qH: "राहुल कतर जा रहा है। सुरक्षित रूप से कैसे प्रवास करें?", oE: ["Learn and enroll in safety training", "Confirm job before moving", "Organize documents", "All of these"], oH: ["सीखें और सुरक्षा प्रशिक्षण में नामांकन करें", "जाने से पहले नौकरी की पुष्टि करें", "दस्तावेज़ व्यवस्थित करें", "ये सभी"], c: 3 },
        { qE: "Kalpana received a job offer letter. What should she do?", qH: "कल्पना को नौकरी का प्रस्ताव पत्र मिला है। उसे क्या करना चाहिए?", oE: ["Research living in Bangalore", "Share location on social media", "Buy gifts for neighbours", "Believe brokers"], oH: ["बैंगलोर में रहने पर शोध करें", "सोशल मीडिया पर स्थान साझा करें", "पड़ोसियों के लिए उपहार खरीदें", "ब्रोकर्स पर विश्वास करें"], c: 0 },
        { qE: "Main purpose of Skill India Digital Platform?", qH: "स्किल इंडिया डिजिटल प्लेटफॉर्म का मुख्य उद्देश्य?", oE: ["Offline training", "Financial assistance", "Online learning and skill development", "International jobs"], oH: ["ऑफलाइन प्रशिक्षण", "वित्तीय सहायता", "ऑनलाइन शिक्षा और कौशल विकास", "अंतर्राष्ट्रीय नौकरियाँ"], c: 2 },
        { qE: "How to access Skill India Digital Platform?", qH: "स्किल इंडिया डिजिटल प्लेटफॉर्म का उपयोग कैसे करें?", oE: ["Only offline centers", "Only on one device", "Through a specialized app", "On computers, tablets, phones"], oH: ["केवल ऑफलाइन केंद्र", "केवल एक डिवाइस पर", "एक विशेष ऐप के माध्यम से", "कंप्यूटर, टैबलेट, फोन पर"], c: 3 },
        { qE: "Which section helps find physical training centers?", qH: "कौन सा अनुभाग भौतिक प्रशिक्षण केंद्र खोजने में मदद करता है?", oE: ["Skill Courses", "Job Exchange", "Skill Centres", "Recommendations"], oH: ["स्किल कोर्स", "जॉब एक्सचेंज", "स्किल सेंटर्स", "अनुशंसाएँ"], c: 2 },
        { qE: "What resources are on Skill India Digital Platform?", qH: "स्किल इंडिया डिजिटल प्लेटफॉर्म पर क्या संसाधन हैं?", oE: ["Only job listings", "Courses, skill centers, jobs, and more", "Only eBooks", "Financial services only"], oH: ["केवल नौकरी की सूची", "कोर्स, स्किल सेंटर, नौकरियाँ, और भी बहुत कुछ", "केवल ईबुक", "केवल वित्तीय सेवाएँ"], c: 1 },
        { qE: "A green practice involves any activity that _____.", qH: "एक हरित प्रथा में कोई भी गतिविधि शामिल होती है जो _____।", oE: ["harms the environment", "protects the environment", "consumes too much", "generates pollution"], oH: ["पर्यावरण को नुकसान पहुँचाती है", "पर्यावरण की रक्षा करती है", "बहुत अधिक उपभोग करती है", "प्रदूषण उत्पन्न करती है"], c: 1 },
        { qE: "Which term means using things sustainably?", qH: "किस शब्द का अर्थ है चीजों को टिकाऊ तरीके से उपयोग करना?", oE: ["Sustainability", "Pollution", "Eco-friendliness", "Resources"], oH: ["सस्टेनेबिलिटी", "प्रदूषण", "इको-फ्रेंडलीनेस", "संसाधन"], c: 0 },
        { qE: "What does a green mindset mean?", qH: "हरित मानसिकता का क्या अर्थ है?", oE: ["Harmful choices", "Unsustainable use", "Ignoring waste", "Caring for environment"], oH: ["हानिकारक विकल्प", "अनटिकाऊ उपयोग", "कचरे की अनदेखी", "पर्यावरण की देखभाल"], c: 3 },
        { qE: "Which is a green practice?", qH: "कौन सी हरित प्रथा है?", oE: ["Buying unnecessary items", "Leaving lights on", "Carrying a cloth bag", "Buying plastic water bottles"], oH: ["अनावश्यक वस्तुएँ खरीदना", "लाइट छोड़ना", "कपड़े का थैला ले जाना", "प्लास्टिक की पानी की बोतलें खरीदना"], c: 2 },
        { qE: "Friend suggests disposable plates. What shows green mindset?", qH: "दोस्त डिस्पोजेबल प्लेट सुझाता है। हरित मानसिकता क्या दिखाती है?", oE: ["Say yes", "Bring reusable plates", "Ignore invite", "Bring green disposable plates"], oH: ["हाँ कहें", "पुन: प्रयोज्य प्लेट लाएँ", "निमंत्रण को अनदेखा करें", "हरा डिस्पोजेबल प्लेट लाएँ"], c: 1 },
        { qE: "What are green jobs?", qH: "ग्रीन जॉब्स क्या हैं?", oE: ["Jobs in green color", "Jobs that harm environment", "Jobs that ignore waste", "Jobs that conserve resources"], oH: ["हरे रंग में नौकरियाँ", "पर्यावरण को नुकसान पहुँचाने वाली नौकरियाँ", "कचरे की अनदेखी करने वाली नौकरियाँ", "संसाधनों को संरक्षित करने वाली नौकरियाँ"], c: 3 },
        { qE: "Which is NOT a green practice?", qH: "कौन सी हरित प्रथा नहीं है?", oE: ["Smart AC", "Plastic containers daily", "Separate and recycle waste", "Grow plants"], oH: ["स्मार्ट AC", "प्रतिदिन प्लास्टिक कंटेनर", "कचरा अलग करें और रीसायकल करें", "पौधे उगाएँ"], c: 1 },
        { qE: "A green workplace _____.", qH: "एक हरित कार्यस्थल _____।", oE: ["uses less paper", "uses disposable items", "keeps lights on", "ignores waste"], oH: ["कम कागज का उपयोग करता है", "डिस्पोजेबल वस्तुओं का उपयोग करता है", "रोशनी जलाए रखता है", "कचरे की अनदेखी करता है"], c: 0 },
        { qE: "Reema's idea for a green restaurant?", qH: "रीमा का एक हरित रेस्तरां के लिए विचार?", oE: ["Plastic packaging", "Steel plates and cups", "Disposable plates", "All of these"], oH: ["प्लास्टिक पैकेजिंग", "स्टील की प्लेटें और कप", "डिस्पोजेबल प्लेट", "ये सभी"], c: 1 },
        { qE: "Shyam's salon item NOT good for environment?", qH: "श्याम के सैलून की कौन सी वस्तु पर्यावरण के लिए अच्छी नहीं है?", oE: ["Reusable gloves", "Biodegradable cleaners", "Paper cups for tea", "Eco-friendly hair disposal"], oH: ["पुन: प्रयोज्य दस्ताने", "बायोडिग्रेडेबल क्लीनर", "चाय के लिए पेपर कप", "इको-फ्रेंडली बाल निपटान"], c: 2 }
      ]
    },

    // ---- MODULE 3: Professional Skills (120 Qs) ----
    "Module 3: Professional Skills": {
      questions: [
        { qE: "Which is NOT a people skill at workplace?", qH: "कार्यस्थल पर कौन सा लोगों का कौशल नहीं है?", oE: ["Listening", "Being kind", "Technical skills", "Supporting coworkers"], oH: ["सुनना", "दयालु होना", "तकनीकी कौशल", "सहकर्मियों का समर्थन करना"], c: 2 },
        { qE: "How to work well with people?", qH: "लोगों के साथ अच्छी तरह से कैसे काम करें?", oE: ["Stay calm", "Accept mistakes", "Pay attention", "All of these"], oH: ["शांत रहें", "गलतियाँ स्वीकार करें", "ध्यान दें", "ये सभी"], c: 3 },
        { qE: "Venu's team made a mistake. What should he do?", qH: "वेनू की टीम ने गलती की। उसे क्या करना चाहिए?", oE: ["Blame the person", "Wait for others", "Discuss and fix it", "Get angry"], oH: ["व्यक्ति को दोष दें", "दूसरों की प्रतीक्षा करें", "चर्चा करें और ठीक करें", "गुस्सा हो जाएँ"], c: 2 },
        { qE: "Coworker struggling. What should you do?", qH: "सहकर्मी संघर्ष कर रहा है। आपको क्या करना चाहिए?", oE: ["Do their work", "Ignore", "Complain", "Help and support"], oH: ["उनका काम करें", "अनदेखा करें", "शिकायत करें", "मदद और सहायता करें"], c: 3 },
        { qE: "Amit's team is low after failure. As leader, what should he do?", qH: "अमित की टीम असफलता के बाद निराश है। नेता के रूप में, उसे क्या करना चाहिए?", oE: ["Blame them", "Encourage learning from mistakes", "Scold them", "Ignore them"], oH: ["उन्हें दोष दें", "गलतियों से सीखने के लिए प्रोत्साहित करें", "उन्हें डांटें", "उन्हें अनदेखा करें"], c: 1 },
        { qE: "What does working well together mean?", qH: "एक साथ अच्छी तरह से काम करने का क्या मतलब है?", oE: ["Sharing ideas", "Finding solutions together", "Helping others", "All of these"], oH: ["विचार साझा करना", "एक साथ समाधान खोजना", "दूसरों की मदद करना", "ये सभी"], c: 3 },
        { qE: "Which behavior is NOT a team player characteristic?", qH: "कौन सा व्यवहार टीम खिलाड़ी की विशेषता नहीं है?", oE: ["Taking credit for others' work", "Listening to teammates", "Respecting different viewpoints", "Willingness to help"], oH: ["दूसरों के काम का श्रेय लेना", "सहकर्मियों की बात सुनना", "विभिन्न दृष्टिकोणों का सम्मान करना", "मदद करने की इच्छा"], c: 0 },
        { qE: "Team disagreement. What should be done?", qH: "टीम में असहमति। क्या किया जाना चाहिए?", oE: ["Let them argue", "Choose one idea", "Discuss both and find agreement", "Ask someone else"], oH: ["उन्हें बहस करने दें", "एक विचार चुनें", "दोनों पर चर्चा करें और सहमति खोजें", "किसी और से पूछें"], c: 2 },
        { qE: "Simi tries new ways to reuse waste. She is a _____.", qH: "सिमी कचरे का पुन: उपयोग करने के नए तरीके आजमाती है। वह एक _____ है।", oE: ["Planner", "Doer", "Idea Person", "Peacekeeper"], oH: ["योजनाकार", "कर्ता", "विचार व्यक्ति", "शांतिदूत"], c: 2 },
        { qE: "Which shows good teamwork?", qH: "कौन सा अच्छी टीम वर्क दिखाता है?", oE: ["Arguing", "Sharing ideas and listening", "One person doing all work", "None"], oH: ["बहस करना", "विचार साझा करना और सुनना", "एक व्यक्ति सारा काम कर रहा है", "कोई नहीं"], c: 1 },
        { qE: "Which is a self-management skill?", qH: "कौन सा स्व-प्रबंधन कौशल है?", oE: ["Honesty", "Commitment", "Flexibility", "All of these"], oH: ["ईमानदारी", "प्रतिबद्धता", "लचीलापन", "ये सभी"], c: 3 },
        { qE: "What describes the self-management skill of reliability?", qH: "विश्वसनीयता के स्व-प्रबंधन कौशल का क्या वर्णन है?", oE: ["Not completing tasks", "People trust you to do your job well", "Ignoring others", "Not being honest"], oH: ["कार्यों को पूरा नहीं करना", "लोगों को भरोसा है कि आप अपना काम अच्छी तरह से करेंगे", "दूसरों की अनदेखी करना", "ईमानदार नहीं होना"], c: 1 },
        { qE: "Priya quickly finds another way when machine stops. Which skill?", qH: "मशीन बंद होने पर प्रिया जल्दी से दूसरा रास्ता खोज लेती है। कौन सा कौशल?", oE: ["Honesty", "Adaptability", "Conflict management", "None"], oH: ["ईमानदारी", "अनुकूलनशीलता", "संघर्ष प्रबंधन", "कोई नहीं"], c: 1 },
        { qE: "Coworker falls ill. What should you do?", qH: "सहकर्मी बीमार पड़ जाता है। आपको क्या करना चाहिए?", oE: ["Criticize", "Keep working on own tasks", "Help and complete the task", "Complain"], oH: ["आलोचना करें", "अपने कार्यों पर काम करते रहें", "मदद करें और कार्य पूरा करें", "शिकायत करें"], c: 2 },
        { qE: "You discover a mistake that caused delays. What should you do?", qH: "आपको कोई गलती मिलती है जिसमें देरी हुई। आपको क्या करना चाहिए?", oE: ["Blame team", "Wait for someone else", "Tell your boss", "Ignore it"], oH: ["टीम को दोष दें", "किसी और की प्रतीक्षा करें", "अपने बॉस को बताएं", "इसे अनदेखा करें"], c: 2 },
        { qE: "Working on something difficult and not going well. What to do?", qH: "कुछ मुश्किल काम कर रहे हैं और अच्छा नहीं चल रहा है। क्या करें?", oE: ["Keep trying", "Give up", "Ask someone else", "Get upset"], oH: ["कोशिश करते रहें", "हार मान लें", "किसी और से पूछें", "परेशान हो जाएँ"], c: 0 }
      ]
    },

    // ---- MODULE 4: Design Thinking (50 Qs) ----
    "Module 4: Design Thinking": {
      questions: [
        { qE: "What are the steps in Design Thinking?", qH: "डिजाइन थिंकिंग में चरण क्या हैं?", oE: ["Imagine, Plan, Try", "Try, Create, Decide", "Listen, Choose, Plan, Try, Ask", "Imagine, Decide, Create, Try"], oH: ["कल्पना करें, योजना बनाएं, प्रयास करें", "प्रयास करें, बनाएं, निर्णय लें", "सुनें, चुनें, योजना बनाएं, प्रयास करें, पूछें", "कल्पना करें, निर्णय लें, बनाएं, प्रयास करें"], c: 2 },
        { qE: "How does Design Thinking help solve problems?", qH: "डिजाइन थिंकिंग समस्याओं को हल करने में कैसे मदद करती है?", oE: ["Strict process", "Random guessing", "Understanding people's needs and improving", "Personal assumptions"], oH: ["सख्त प्रक्रिया", "यादृच्छिक अनुमान", "लोगों की जरूरतों को समझना और सुधारना", "व्यक्तिगत मान्यताएँ"], c: 2 },
        { qE: "Rohan has an idea. What must he do next?", qH: "रोहन के पास एक विचार है। उसे आगे क्या करना चाहिए?", oE: ["Write it down", "Apply and test it", "Tell everyone", "Think of another"], oH: ["इसे लिखें", "इसे लागू करें और परीक्षण करें", "सभी को बताएं", "दूसरे के बारे में सोचें"], c: 1 },
        { qE: "Ravi wants to make a new chair. What should he do first?", qH: "रवि एक नई कुर्सी बनाना चाहता है। उसे पहले क्या करना चाहिए?", oE: ["Plan how to make it", "Listen to what students want", "Choose colour", "Test designs"], oH: ["इसे बनाने की योजना बनाएं", "सुनें कि छात्र क्या चाहते हैं", "रंग चुनें", "डिज़ाइन का परीक्षण करें"], c: 1 },
        { qE: "Sameera's next step after understanding needs?", qH: "समीरा की जरूरतों को समझने के बाद अगला कदम?", oE: ["Plan different designs", "Ask students to test", "Choose material", "Choose colour"], oH: ["विभिन्न डिज़ाइनों की योजना बनाएं", "छात्रों को परीक्षण करने के लिए कहें", "सामग्री चुनें", "रंग चुनें"], c: 0 },
        { qE: "If your first design doesn't work, what should you do?", qH: "यदि आपका पहला डिज़ाइन काम नहीं करता है, तो आपको क्या करना चाहिए?", oE: ["Give up", "Ask feedback and improve", "Make something else", "None"], oH: ["हार मान लें", "प्रतिक्रिया मांगें और सुधार करें", "कुछ और बनाएं", "कोई नहीं"], c: 1 },
        { qE: "Ranjana can improve menu using design thinking by _____.", qH: "रंजना डिजाइन थिंकिंग का उपयोग करके मेनू में सुधार कर सकती है _____.", oE: ["Guessing", "Copying others", "Talking to customers and getting feedback", "Random selection"], oH: ["अनुमान लगाना", "दूसरों की नकल करना", "ग्राहकों से बात करना और प्रतिक्रिया प्राप्त करना", "यादृच्छिक चयन"], c: 2 },
        { qE: "Why let people try a new app before it's done?", qH: "कोई नया ऐप पूरा होने से पहले लोगों को क्यों आजमाने दें?", oE: ["To show off", "For appreciation", "Fun", "To see how they use it and make it better"], oH: ["दिखावा करने के लिए", "प्रशंसा के लिए", "मजे के लिए", "यह देखने के लिए कि वे इसका उपयोग कैसे करते हैं और इसे बेहतर बनाते हैं"], c: 3 },
        { qE: "Why listen to different users for feedback?", qH: "प्रतिक्रिया के लिए विभिन्न उपयोगकर्ताओं को क्यों सुनें?", oE: ["It's fun", "To get many ideas", "To understand common problems", "For appreciation"], oH: ["मजेदार है", "कई विचार प्राप्त करने के लिए", "सामान्य समस्याओं को समझने के लिए", "प्रशंसा के लिए"], c: 2 },
        { qE: "Community wants to reduce plastic waste. How to use Design Thinking?", qH: "समुदाय प्लास्टिक कचरा कम करना चाहता है। डिजाइन थिंकिंग का उपयोग कैसे करें?", oE: ["Ignore problem", "Work together to find solutions", "Make more plastic", "Blame others"], oH: ["समस्या को अनदेखा करें", "समाधान खोजने के लिए एक साथ काम करें", "अधिक प्लास्टिक बनाएं", "दूसरों को दोष दें"], c: 1 }
      ]
    },

    // ---- MODULE 5: Entrepreneurial Skills (100 Qs) ----
    "Module 5: Entrepreneurial Skills": {
      questions: [
        { qE: "Entrepreneurial mindset means to _____.", qH: "उद्यमशील मानसिकता का अर्थ _____ है।", oE: ["Identify opportunities", "Try different solutions", "Achieve goals without giving up", "All of these"], oH: ["अवसरों की पहचान करना", "विभिन्न समाधान आज़माना", "हार माने बिना लक्ष्य प्राप्त करना", "ये सभी"], c: 3 },
        { qE: "What does it mean to think like a business person?", qH: "एक व्यवसायी व्यक्ति की तरह सोचने का क्या अर्थ है?", oE: ["Only money", "Scared to try new things", "Seeing problems as things to fix", "Not liking change"], oH: ["केवल पैसा", "नई चीजें आजमाने से डरना", "समस्याओं को ठीक करने वाली चीज़ों के रूप में देखना", "बदलाव पसंद नहीं करना"], c: 2 },
        { qE: "If you face a community problem, which mindset trait is helpful?", qH: "यदि आपको सामुदायिक समस्या का सामना करना पड़ता है, तो कौन सा मानसिकता गुण सहायक है?", oE: ["Wait for perfection", "Take action to solve it", "Ignore it", "Blame others"], oH: ["पूर्णता की प्रतीक्षा करें", "इसे हल करने के लिए कार्रवाई करें", "इसे अनदेखा करें", "दूसरों को दोष दें"], c: 1 },
        { qE: "Imli wants to grow her soap business. What should she do?", qH: "इमली अपना साबुन व्यवसाय बढ़ाना चाहती है। उसे क्या करना चाहिए?", oE: ["Talk to shopkeepers and build connections", "Keep doing same", "Wait for opportunity", "Only sell to neighbors"], oH: ["दुकानदारों से बात करें और संबंध बनाएं", "वही करते रहें", "अवसर की प्रतीक्षा करें", "केवल पड़ोसियों को बेचें"], c: 0 },
        { qE: "Coworkers don't agree with your idea. What's a good way?", qH: "सहकर्मी आपके विचार से सहमत नहीं हैं। एक अच्छा तरीका क्या है?", oE: ["Give up", "Stop talking", "Ask feedback and improve with their help", "Stick to your idea"], oH: ["हार मान लें", "बात करना बंद करें", "प्रतिक्रिया मांगें और उनकी मदद से सुधार करें", "अपने विचार पर अड़े रहें"], c: 2 },
        { qE: "Why is a business plan important before starting?", qH: "शुरू करने से पहले व्यवसाय योजना क्यों महत्वपूर्ण है?", oE: ["Attract investors", "Outline goals", "Identify challenges", "All of these"], oH: ["निवेशकों को आकर्षित करना", "लक्ष्यों की रूपरेखा तैयार करना", "चुनौतियों की पहचान करना", "ये सभी"], c: 3 },
        { qE: "Most important for success of a mobile repair shop?", qH: "मोबाइल रिपेयर शॉप की सफलता के लिए सबसे महत्वपूर्ण?", oE: ["Setting up in a busy area", "Higher price", "Putting flyers", "Picking the right name"], oH: ["व्यस्त क्षेत्र में सेटअप करना", "उच्च कीमत", "पर्चे डालना", "सही नाम चुनना"], c: 0 },
        { qE: "What is NOT included in a business plan?", qH: "व्यवसाय योजना में क्या शामिल नहीं है?", oE: ["Business idea", "Startup costs", "Future growth", "Personal hobbies"], oH: ["व्यवसाय विचार", "स्टार्टअप लागत", "भविष्य की वृद्धि", "व्यक्तिगत शौक"], c: 3 },
        { qE: "Anita's business plan strong point?", qH: "अनीता के व्यवसाय योजना का मजबूत बिंदु?", oE: ["Only idea and name", "Total cost without details", "Challenges with solutions", "None"], oH: ["केवल विचार और नाम", "विवरण के बिना कुल लागत", "समाधान के साथ चुनौतियाँ", "कोई नहीं"], c: 2 },
        { qE: "Bakery business plan focus first?", qH: "बेकरी व्यवसाय योजना में पहले क्या ध्यान दें?", oE: ["Catchy name", "Calculate money needed", "Social media ads", "Future growth"], oH: ["आकर्षक नाम", "आवश्यक धन की गणना करें", "सोशल मीडिया विज्ञापन", "भविष्य की वृद्धि"], c: 1 },
        { qE: "What to do to engage audience while presenting business plan?", qH: "व्यवसाय योजना प्रस्तुत करते समय दर्शकों को संलग्न करने के लिए क्या करें?", oE: ["Practice confidently", "Repeat yourself", "Share a story", "Avoid eye contact"], oH: ["आत्मविश्वास से अभ्यास करें", "खुद को दोहराएं", "एक कहानी साझा करें", "आँख से संपर्क करने से बचें"], c: 2 },
        { qE: "When presenting to an investor, be clear about _____.", qH: "एक निवेशक को प्रस्तुत करते समय, _____ के बारे में स्पष्ट रहें।", oE: ["Initial investment", "Expected customers", "Potential earnings", "All of these"], oH: ["प्रारंभिक निवेश", "अपेक्षित ग्राहक", "संभावित कमाई", "ये सभी"], c: 3 },
        { qE: "What can help audience believe in your product?", qH: "दर्शकों को आपके उत्पाद पर विश्वास करने में क्या मदद कर सकता है?", oE: ["Repeat yourself", "Give a demo", "Share costs", "Tell a joke"], oH: ["खुद को दोहराएं", "डेमो दें", "लागत साझा करें", "एक मजाक बताएं"], c: 1 },
        { qE: "Why listen to investors' questions?", qH: "निवेशकों के प्रश्न क्यों सुनें?", oE: ["To show expertise", "Avoid eye contact", "Understand their concerns and build confidence", "None"], oH: ["विशेषज्ञता दिखाने के लिए", "आँख से संपर्क करने से बचने के लिए", "उनकी चिंताओं को समझें और उनका विश्वास बनाएं", "कोई नहीं"], c: 2 },
        { qE: "Maya needs funding. What can she do?", qH: "माया को फंडिंग की जरूरत है। वह क्या कर सकती है?", oE: ["Send to every investor", "Attend networking events", "Send to friends", "Wait"], oH: ["हर निवेशक को भेजें", "नेटवर्किंग इवेंट्स में भाग लें", "दोस्तों को भेजें", "प्रतीक्षा करें"], c: 1 }
      ]
    },

    // ---- MODULE 6: Internet Skills (60 Qs) ----
    "Module 6: Internet Skills": {
      questions: [
        { qE: "Why use the right words on Google?", qH: "Google पर सही शब्दों का उपयोग क्यों करें?", oE: ["To find correct info", "To change page color", "To brighten screen", "To learn a new language"], oH: ["सही जानकारी खोजने के लिए", "पृष्ठ का रंग बदलने के लिए", "स्क्रीन को चमकाने के लिए", "एक नई भाषा सीखने के लिए"], c: 0 },
        { qE: "Sanya collected info. What to do next to sort it?", qH: "सान्या ने जानकारी एकत्र की। इसे छाँटने के लिए आगे क्या करें?", oE: ["Mix all info", "Share with coworkers", "Read and mark important points", "Keep in separate folders"], oH: ["सारी जानकारी मिलाएं", "सहकर्मियों के साथ साझा करें", "पढ़ें और महत्वपूर्ण बिंदुओं को चिह्नित करें", "अलग-अलग फ़ोल्डरों में रखें"], c: 2 },
        { qE: "Sunita sorted info. Best way to share with team?", qH: "सुनीता ने जानकारी छाँट ली। टीम के साथ साझा करने का सबसे अच्छा तरीका?", oE: ["Tell everything", "Share main points clearly with simple words", "Talk about bad websites", "Print all"], oH: ["सब कुछ बताएं", "मुख्य बिंदुओं को स्पष्ट रूप से सरल शब्दों में साझा करें", "खराब वेबसाइटों के बारे में बात करें", "सभी प्रिंट करें"], c: 1 },
        { qE: "Why think about what you learn?", qH: "आप जो सीखते हैं उसके बारे में क्यों सोचें?", oE: ["Good pastime", "Helps remember and understand", "Improves handwriting", "None"], oH: ["अच्छा शगल", "याद रखने और समझने में मदद करता है", "लिखावट में सुधार करता है", "कोई नहीं"], c: 1 },
        { qE: "Questions to ask while thinking about learning?", qH: "सीखने के बारे में सोचते समय क्या प्रश्न पूछें?", oE: ["What did I learn?", "Was it easy/difficult?", "How can I learn better?", "All of these"], oH: ["मैंने क्या सीखा?", "क्या यह आसान/मुश्किल था?", "मैं बेहतर कैसे सीख सकता हूँ?", "ये सभी"], c: 3 },
        { qE: "Rahul applying for a job. Which documents to attach?", qH: "राहुल नौकरी के लिए आवेदन कर रहा है। कौन से दस्तावेज़ संलग्न करें?", oE: ["Birth certificate", "Resume and Certificates", "Address proof", "Childhood photos"], oH: ["जन्म प्रमाण पत्र", "रिज्यूमे और प्रमाण पत्र", "पता प्रमाण", "बचपन की तस्वीरें"], c: 1 },
        { qE: "Why include a clear subject in email?", qH: "ईमेल में स्पष्ट विषय क्यों शामिल करें?", oE: ["Email can't be sent without it", "To tell what email is about", "To show English skills", "None"], oH: ["इसके बिना ईमेल नहीं भेजा जा सकता", "यह बताने के लिए कि ईमेल किस बारे में है", "अंग्रेजी कौशल दिखाने के लिए", "कोई नहीं"], c: 1 },
        { qE: "Sia applying for electrician. How to start email?", qH: "सिया इलेक्ट्रीशियन के लिए आवेदन कर रही है। ईमेल कैसे शुरू करें?", oE: ["Start with a joke", "Attach favorite photos", "Clear subject and polite greeting", "Write a short story"], oH: ["एक मजाक के साथ शुरू करें", "पसंदीदा फोटो संलग्न करें", "स्पष्ट विषय और विनम्र अभिवादन", "एक छोटी कहानी लिखें"], c: 2 },
        { qE: "Archana sending job application. How to share documents?", qH: "अर्चना नौकरी आवेदन भेज रही है। दस्तावेज़ कैसे साझा करें?", oE: ["Take photos from phone", "Don't send as it's unsafe", "Copy paste content", "Attach scanned PDFs"], oH: ["फोन से फोटो खींचें", "न भेजें क्योंकि यह असुरक्षित है", "सामग्री कॉपी पेस्ट करें", "स्कैन किए गए PDF संलग्न करें"], c: 3 },
        { qE: "Best subject line for electrician job application?", qH: "इलेक्ट्रीशियन नौकरी आवेदन के लिए सबसे अच्छी विषय पंक्ति?", oE: ["Electrician Job Application", "Applying for New Job", "Urgent", "Application for Electrician Position - [Your Name]"], oH: ["इलेक्ट्रीशियन जॉब एप्लीकेशन", "नई नौकरी के लिए आवेदन", "अत्यावश्यक", "इलेक्ट्रीशियन पद के लिए आवेदन - [आपका नाम]"], c: 3 },
        { qE: "How can Instagram, YouTube, WhatsApp help find work?", qH: "Instagram, YouTube, WhatsApp काम खोजने में कैसे मदद कर सकते हैं?", oE: ["Post work photos/videos", "Connect with professionals", "Fast communication with customers", "All of these"], oH: ["काम की फोटो/वीडियो पोस्ट करें", "पेशेवरों से जुड़ें", "ग्राहकों के साथ त्वरित संचार", "ये सभी"], c: 3 },
        { qE: "Why reply to comments on YouTube?", qH: "YouTube पर टिप्पणियों का जवाब क्यों दें?", oE: ["To get more videos", "Viewers feel connected", "To use internet", "To get more friends"], oH: ["अधिक वीडियो प्राप्त करने के लिए", "दर्शक जुड़ा हुआ महसूस करते हैं", "इंटरनेट का उपयोग करने के लिए", "अधिक मित्र प्राप्त करने के लिए"], c: 1 },
        { qE: "Raj the carpenter showing work on YouTube. How does it help?", qH: "राज बढ़ई YouTube पर काम दिखा रहा है। इससे कैसे मदद मिलती है?", oE: ["Shows skills", "Engages people", "May get more customers", "All of these"], oH: ["कौशल दिखाता है", "लोगों को संलग्न करता है", "अधिक ग्राहक प्राप्त कर सकता है", "ये सभी"], c: 3 },
        { qE: "Ranjit bakery uses WhatsApp Business. It helps to _____.", qH: "रंजीत बेकरी WhatsApp Business का उपयोग करता है। यह _____ में मदद करता है।", oE: ["Chat with friends", "Quickly respond to orders", "Watch tutorials", "Check status"], oH: ["दोस्तों के साथ चैट करें", "ऑर्डर का तुरंत जवाब दें", "ट्यूटोरियल देखें", "स्थिति की जाँच करें"], c: 1 },
        { qE: "Mahima's jewelry Instagram page. What should she do?", qH: "महिमा का ज्वेलरी Instagram पेज। उसे क्या करना चाहिए?", oE: ["Post dance reels", "Post about TV show", "Share daily business updates", "Post cooking videos"], oH: ["डांस रील्स पोस्ट करें", "टीवी शो के बारे में पोस्ट करें", "व्यवसाय के दैनिक अपडेट साझा करें", "कुकिंग वीडियो पोस्ट करें"], c: 2 }
      ]
    },

    // ---- MODULE 7: Stress Management & Networking (50 Qs) ----
    "Module 7: Stress Management & Networking": {
      questions: [
        { qE: "_____ can be a physical, mental, or emotional reaction.", qH: "_____ एक शारीरिक, मानसिक या भावनात्मक प्रतिक्रिया हो सकती है।", oE: ["Stress", "Food", "Job", "Action"], oH: ["तनाव", "भोजन", "नौकरी", "क्रिया"], c: 0 },
        { qE: "What kind of stress can lead to lifelong health issues?", qH: "किस प्रकार का तनाव आजीवन स्वास्थ्य समस्याओं का कारण बन सकता है?", oE: ["Short-term", "Long-term", "Mid-term", "Good stress"], oH: ["अल्पकालिक", "दीर्घकालिक", "मध्यम अवधि", "अच्छा तनाव"], c: 1 },
        { qE: "_____ stress can make us feel excited and motivated.", qH: "_____ तनाव हमें उत्साहित और प्रेरित महसूस करा सकता है।", oE: ["Bad", "Good", "Short-term", "Long-term"], oH: ["बुरा", "अच्छा", "अल्पकालिक", "दीर्घकालिक"], c: 1 },
        { qE: "Tom feels tensed before exams. What type of stress?", qH: "टॉम परीक्षा से पहले तनाव महसूस करता है। किस प्रकार का तनाव?", oE: ["Good", "Small", "Bad", "Never"], oH: ["अच्छा", "छोटा", "बुरा", "कभी नहीं"], c: 2 },
        { qE: "Arjun maintains work-life balance. What is he doing?", qH: "अर्जुन कार्य-जीवन संतुलन बनाए रखता है। वह क्या कर रहा है?", oE: ["Working a lot", "Not working", "Maintaining good work-life balance", "Enjoying politics"], oH: ["बहुत काम करना", "काम नहीं करना", "अच्छा कार्य-जीवन संतुलन बनाए रखना", "राजनीति का आनंद लेना"], c: 2 },
        { qE: "A ____ is the first document an employer looks at.", qH: "एक ____ पहला दस्तावेज़ है जिसे एक नियोक्ता देखता है।", oE: ["Certificate", "Resume", "Ticket", "Bank statement"], oH: ["प्रमाणपत्र", "रिज्यूमे", "टिकट", "बैंक विवरण"], c: 1 },
        { qE: "What are key elements of a resume?", qH: "रिज्यूमे के प्रमुख तत्व क्या हैं?", oE: ["Personal info", "Career objective", "Education", "All of these"], oH: ["व्यक्तिगत जानकारी", "करियर उद्देश्य", "शिक्षा", "ये सभी"], c: 3 },
        { qE: "Which is NOT a soft skill?", qH: "कौन सा सॉफ्ट स्किल नहीं है?", oE: ["Time Management", "Communication", "Carpentry", "Goal Setting"], oH: ["समय प्रबंधन", "संचार", "बढ़ईगीरी", "लक्ष्य निर्धारण"], c: 2 },
        { qE: "What should NOT be included in a resume?", qH: "रिज्यूमे में क्या शामिल नहीं करना चाहिए?", oE: ["Salary expectations", "Name", "Qualification", "Date of birth"], oH: ["वेतन अपेक्षाएँ", "नाम", "योग्यता", "जन्मतिथि"], c: 0 },
        { qE: "Harry knows circuits. He can apply as a/an ____.", qH: "हैरी को सर्किट का ज्ञान है। वह ____ के रूप में आवेदन कर सकता है।", oE: ["Beautician", "Plumber", "Fitter", "Electrician"], oH: ["ब्यूटीशियन", "प्लंबर", "फिटर", "इलेक्ट्रीशियन"], c: 3 },
        { qE: "____ is the formal process to check if candidate is suitable.", qH: "____ उम्मीदवार के उपयुक्त होने की जाँच करने की औपचारिक प्रक्रिया है।", oE: ["Interview", "Onboarding", "Training", "Reading"], oH: ["साक्षात्कार", "ऑनबोर्डिंग", "प्रशिक्षण", "पढ़ना"], c: 0 },
        { qE: "Which is NOT an interview skill?", qH: "कौन सा साक्षात्कार कौशल नहीं है?", oE: ["Clear communication", "Painting", "Active listening", "Confidence"], oH: ["स्पष्ट संचार", "पेंटिंग", "सक्रिय सुनना", "आत्मविश्वास"], c: 1 },
        { qE: "Which is a good manner in an interview?", qH: "साक्षात्कार में कौन सा अच्छा शिष्टाचार है?", oE: ["Not making eye contact", "Speaking too fast", "Being on time", "Getting irritated"], oH: ["आँख से संपर्क न करना", "बहुत तेज़ बोलना", "समय पर होना", "चिढ़ जाना"], c: 2 },
        { qE: "Rahul was asked to wait. What can he do after few days?", qH: "राहुल को कुछ दिन प्रतीक्षा करने को कहा गया। कुछ दिनों बाद वह क्या कर सकता है?", oE: ["Follow up", "Give up", "Never call", "Meet friends"], oH: ["अनुवर्ती कार्रवाई करें", "हार मान लें", "कभी कॉल न करें", "दोस्तों से मिलें"], c: 0 },
        { qE: "Seema is attending an interview. What should she carry?", qH: "सीमा एक साक्षात्कार में भाग ले रही है। उसे क्या ले जाना चाहिए?", oE: ["Resume", "Certificates", "ID cards", "All of these"], oH: ["रिज्यूमे", "प्रमाणपत्र", "आईडी कार्ड", "ये सभी"], c: 3 },
        { qE: "What will the interviewer expect from candidates?", qH: "साक्षात्कारकर्ता उम्मीदवारों से क्या अपेक्षा करेगा?", oE: ["Good soft skills", "Cooking skills", "Singing skills", "Painting skills"], oH: ["अच्छे सॉफ्ट स्किल्स", "खाना पकाने के कौशल", "गायन कौशल", "पेंटिंग कौशल"], c: 0 },
        { qE: "What should be avoided while facing an interview?", qH: "साक्षात्कार के दौरान किससे बचना चाहिए?", oE: ["Using mobile", "Speaking", "Listening", "Answering questions"], oH: ["मोबाइल का उपयोग करना", "बोलना", "सुनना", "प्रश्नों का उत्तर देना"], c: 0 },
        { qE: "Job interview is a discussion between ____.", qH: "नौकरी का साक्षात्कार ____ के बीच एक चर्चा है।", oE: ["teacher and student", "employee and employer", "brother and sister", "friends"], oH: ["शिक्षक और छात्र", "कर्मचारी और नियोक्ता", "भाई और बहन", "दोस्त"], c: 1 },
        { qE: "Nagma has an interview tomorrow. How to prepare?", qH: "नागमा को कल साक्षात्कार है। कैसे तैयारी करें?", oE: ["Arrive late", "Wear casual", "Talk personal", "Research company & prepare questions"], oH: ["देर से आएं", "कैज़ुअल पहनें", "व्यक्तिगत बात करें", "कंपनी पर शोध करें और प्रश्न तैयार करें"], c: 3 },
        { qE: "Rita should NOT ____ in a new interview.", qH: "रीता को एक नए साक्षात्कार में ____ नहीं करना चाहिए।", oE: ["Talk badly about previous company", "Communicate clearly", "Take resume", "Be on time"], oH: ["पिछली कंपनी के बारे में बुरा बोलना", "स्पष्ट रूप से संवाद करना", "रिज्यूमे लेना", "समय पर होना"], c: 0 },
        { qE: "A mock interview is a ____ interview.", qH: "एक मॉक साक्षात्कार एक ____ साक्षात्कार है।", oE: ["fun", "practice", "virtual", "difficult"], oH: ["मजेदार", "अभ्यास", "आभासी", "मुश्किल"], c: 1 },
        { qE: "Main purpose of mock interviews is to ____.", qH: "मॉक साक्षात्कार का मुख्य उद्देश्य ____ है।", oE: ["give marks", "judge people", "give feedback", "waste time"], oH: ["अंक देना", "लोगों का न्याय करना", "प्रतिक्रिया देना", "समय बर्बाद करना"], c: 2 },
        { qE: "Advantage of a mock interview?", qH: "मॉक साक्षात्कार का क्या लाभ है?", oE: ["Learn how to speak", "Learn how to dress", "Use proper body language", "All of these"], oH: ["कैसे बोलना है सीखें", "कैसे कपड़े पहनने हैं सीखें", "सही शारीरिक भाषा का उपयोग करें", "ये सभी"], c: 3 },
        { qE: "Geetha wants a mock interview. Who should be the interviewer?", qH: "गीता मॉक साक्षात्कार चाहती है। साक्षात्कारकर्ता कौन होना चाहिए?", oE: ["A stranger", "Her senior", "Her younger sister", "Shopkeeper"], oH: ["एक अजनबी", "उसका वरिष्ठ", "उसकी छोटी बहन", "दुकानदार"], c: 1 },
        { qE: "Keith recorded interview to understand his performance. This is to receive _____.", qH: "कीथ ने अपने प्रदर्शन को समझने के लिए साक्षात्कार रिकॉर्ड किया। यह _____ प्राप्त करने के लिए है।", oE: ["feedback", "wishes", "compliments", "greetings"], oH: ["प्रतिक्रिया", "शुभकामनाएँ", "प्रशंसा", "बधाई"], c: 0 }
      ]
    }
  }
}
// ================================================================
// PART 3 - 500+ ADDITIONAL BILINGUAL QUESTIONS
// ITI STUDY CENTRE - EMPLOYABILITY SKILLS
// ================================================================
// इस कोड को अपनी question-bank.js फाइल में "EMPLOYABILITY_BANK" ऑब्जेक्ट के अंदर मर्ज करें

// ---- AI Module (Artificial Intelligence) – 120 Questions ----
"Module 8: Introduction to Artificial Intelligence": {
  questions: [
    { qE: "What is Artificial Intelligence (AI)?", qH: "आर्टिफिशियल इंटेलिजेंस (AI) क्या है?", oE: ["Science of creating intelligent machines", "Science of cooking", "Science of farming", "Science of building houses"], oH: ["बुद्धिमान मशीनें बनाने का विज्ञान", "खाना पकाने का विज्ञान", "खेती का विज्ञान", "घर बनाने का विज्ञान"], c: 0 },
    { qE: "Which of these is an example of AI?", qH: "इनमें से कौन AI का उदाहरण है?", oE: ["Smartphone suggestions", "Digital clock", "Calculator", "Refrigerator"], oH: ["स्मार्टफोन सुझाव", "डिजिटल घड़ी", "कैलकुलेटर", "रेफ्रिजरेटर"], c: 0 },
    { qE: "Machines that can learn and get smarter over time are _____.", qH: "समय के साथ सीखने और होशियार होने वाली मशीनें _____ हैं।", oE: ["AI", "Non-AI", "Manual", "Analog"], oH: ["AI", "गैर-AI", "मैनुअल", "एनालॉग"], c: 0 },
    { qE: "A digital clock showing the current time is an example of AI.", qH: "वर्तमान समय दिखाने वाली डिजिटल घड़ी AI का एक उदाहरण है।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 1 },
    { qE: "A smartphone that suggests words while you type is AI.", qH: "टाइप करते समय शब्द सुझाने वाला स्मार्टफोन AI है।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 0 },
    { qE: "YouTube recommendations are based on AI.", qH: "YouTube सुझाव AI पर आधारित होते हैं।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 0 },
    { qE: "Google Maps uses AI to find the best route.", qH: "Google Maps सबसे अच्छा रास्ता खोजने के लिए AI का उपयोग करता है।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 0 },
    { qE: "Amazon uses AI to suggest products.", qH: "Amazon AI का उपयोग उत्पादों को सुझाने के लिए करता है।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 0 },
    { qE: "Netflix uses AI to suggest movies and shows.", qH: "Netflix AI का उपयोग फिल्मों और शोज़ को सुझाने के लिए करता है।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 0 },
    { qE: "AI needs data to learn and make decisions.", qH: "AI को सीखने और निर्णय लेने के लिए डेटा की आवश्यकता होती है।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 0 },
    { qE: "Machine Learning (ML) is a part of AI.", qH: "मशीन लर्निंग (ML) AI का एक हिस्सा है।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 0 },
    { qE: "Deep Learning (DL) is a part of Machine Learning.", qH: "डीप लर्निंग (DL) मशीन लर्निंग का एक हिस्सा है।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 0 },
    { qE: "Narrow AI can do only one specific task.", qH: "नैरो AI केवल एक विशिष्ट कार्य कर सकता है।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 0 },
    { qE: "General AI can do any intellectual task that a human can.", qH: "जनरल AI कोई भी बौद्धिक कार्य कर सकता है जो एक मानव कर सकता है।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 0 },
    { qE: "Super AI is smarter than the smartest human.", qH: "सुपर AI सबसे होशियार इंसान से भी होशियार है।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 0 },
    { qE: "ChatGPT is an example of Generative AI.", qH: "ChatGPT जनरेटिव AI का एक उदाहरण है।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 0 },
    { qE: "Generative AI can create text, images, and music.", qH: "जनरेटिव AI टेक्स्ट, इमेज और संगीत बना सकता है।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 0 },
    { qE: "A prompt is an instruction given to AI.", qH: "प्रॉम्प्ट AI को दिया गया एक निर्देश है।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 0 },
    { qE: "A good prompt should be clear and specific.", qH: "एक अच्छा प्रॉम्प्ट स्पष्ट और विशिष्ट होना चाहिए।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 0 },
    { qE: "Bias in AI means unfair decisions.", qH: "AI में बायस का अर्थ अनुचित निर्णय है।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 0 },
    { qE: "AI can be used responsibly by protecting privacy.", qH: "गोपनीयता की रक्षा करके AI का जिम्मेदारी से उपयोग किया जा सकता है।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 0 },
    { qE: "Fake news on social media is spread using AI.", qH: "सोशल मीडिया पर फेक न्यूज़ AI का उपयोग करके फैलाई जाती है।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 0 },
    { qE: "AI-powered cyberattacks are a security risk.", qH: "AI-पावर्ड साइबरअटैक एक सुरक्षा जोखिम है।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 0 },
    { qE: "AI can help in career exploration.", qH: "AI करियर अन्वेषण में मदद कर सकता है।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 0 },
    { qE: "AI tools can suggest careers based on interests.", qH: "AI उपकरण रुचियों के आधार पर करियर सुझा सकते हैं।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 0 },
    { qE: "AI can help in learning any topic.", qH: "AI किसी भी विषय को सीखने में मदद कर सकता है।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 0 },
    { qE: "AI can help in resume building.", qH: "AI रिज्यूमे बनाने में मदद कर सकता है।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 0 },
    { qE: "AI can help in preparing for interviews.", qH: "AI साक्षात्कार की तैयारी में मदद कर सकता है।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 0 },
    { qE: "What is data?", qH: "डेटा क्या है?", oE: ["Information collected", "Money", "Food", "Clothes"], oH: ["एकत्रित जानकारी", "पैसा", "भोजन", "कपड़े"], c: 0 },
    { qE: "How does AI learn?", qH: "AI कैसे सीखता है?", oE: ["From data", "From books", "From teachers", "From internet"], oH: ["डेटा से", "किताबों से", "शिक्षकों से", "इंटरनेट से"], c: 0 },
    { qE: "What is the difference between ML and DL?", qH: "ML और DL में क्या अंतर है?", oE: ["ML is simpler, DL is advanced", "ML is advanced, DL is simpler", "Both are same", "None"], oH: ["ML सरल है, DL उन्नत है", "ML उन्नत है, DL सरल है", "दोनों समान हैं", "कोई नहीं"], c: 0 },
    { qE: "Which of these is a Generative AI tool?", qH: "इनमें से कौन सा जनरेटिव AI टूल है?", oE: ["ChatGPT", "Google Maps", "YouTube", "WhatsApp"], oH: ["ChatGPT", "Google Maps", "YouTube", "WhatsApp"], c: 0 },
    { qE: "What is a chatbot?", qH: "चैटबॉट क्या है?", oE: ["AI program that chats", "A hardware device", "A type of computer", "A search engine"], oH: ["AI प्रोग्राम जो चैट करता है", "एक हार्डवेयर डिवाइस", "एक प्रकार का कंप्यूटर", "एक सर्च इंजन"], c: 0 },
    { qE: "What is the full form of ML?", qH: "ML का पूर्ण रूप क्या है?", oE: ["Machine Learning", "Manual Learning", "Machine Logic", "Manual Logic"], oH: ["मशीन लर्निंग", "मैनुअल लर्निंग", "मशीन लॉजिक", "मैनुअल लॉजिक"], c: 0 },
    { qE: "What is the full form of DL?", qH: "DL का पूर्ण रूप क्या है?", oE: ["Deep Learning", "Data Learning", "Digital Learning", "Direct Learning"], oH: ["डीप लर्निंग", "डेटा लर्निंग", "डिजिटल लर्निंग", "डायरेक्ट लर्निंग"], c: 0 },
    { qE: "What is the full form of NLP?", qH: "NLP का पूर्ण रूप क्या है?", oE: ["Natural Language Processing", "Neural Language Processing", "Network Language Protocol", "Natural Logic Protocol"], oH: ["प्राकृतिक भाषा प्रसंस्करण", "तंत्रिका भाषा प्रसंस्करण", "नेटवर्क भाषा प्रोटोकॉल", "प्राकृतिक तर्क प्रोटोकॉल"], c: 0 },
    { qE: "What is computer vision?", qH: "कंप्यूटर विजन क्या है?", oE: ["AI that understands images", "AI that understands text", "AI that understands sound", "AI that understands numbers"], oH: ["AI जो छवियों को समझता है", "AI जो टेक्स्ट को समझता है", "AI जो ध्वनि को समझता है", "AI जो संख्याओं को समझता है"], c: 0 },
    { qE: "Which of these is NOT an AI application?", qH: "इनमें से कौन सा AI अनुप्रयोग नहीं है?", oE: ["Self-driving car", "Voice assistant", "Calculator", "Face recognition"], oH: ["स्व-चालित कार", "वॉयस असिस्टेंट", "कैलकुलेटर", "चेहरा पहचान"], c: 2 },
    { qE: "What is responsible AI?", qH: "जिम्मेदार AI क्या है?", oE: ["AI that is fair and safe", "AI that is fast", "AI that is cheap", "AI that is simple"], oH: ["AI जो निष्पक्ष और सुरक्षित है", "AI जो तेज़ है", "AI जो सस्ता है", "AI जो सरल है"], c: 0 },
    { qE: "What is AI ethics?", qH: "AI नैतिकता क्या है?", oE: ["Rules for using AI responsibly", "Rules for making AI fast", "Rules for making AI cheap", "Rules for making AI simple"], oH: ["AI का जिम्मेदारी से उपयोग करने के नियम", "AI को तेज़ बनाने के नियम", "AI को सस्ता बनाने के नियम", "AI को सरल बनाने के नियम"], c: 0 },
    { qE: "How can AI be used for learning?", qH: "AI का उपयोग सीखने के लिए कैसे किया जा सकता है?", oE: ["By creating personalized study plans", "By watching videos", "By reading books", "By writing notes"], oH: ["व्यक्तिगत अध्ययन योजना बनाकर", "वीडियो देखकर", "किताबें पढ़कर", "नोट्स लिखकर"], c: 0 },
    { qE: "What is a virtual assistant?", qH: "वर्चुअल असिस्टेंट क्या है?", oE: ["AI that helps with tasks", "A person", "A robot", "A computer"], oH: ["AI जो कार्यों में मदद करता है", "एक व्यक्ति", "एक रोबोट", "एक कंप्यूटर"], c: 0 },
    { qE: "Which of these is a virtual assistant?", qH: "इनमें से कौन सा वर्चुअल असिस्टेंट है?", oE: ["Alexa", "Google Maps", "Amazon", "YouTube"], oH: ["Alexa", "Google Maps", "Amazon", "YouTube"], c: 0 },
    { qE: "What is a recommendation system?", qH: "अनुशंसा प्रणाली क्या है?", oE: ["AI that suggests products/content", "AI that calculates", "AI that translates", "AI that recognizes faces"], oH: ["AI जो उत्पाद/सामग्री सुझाता है", "AI जो गणना करता है", "AI जो अनुवाद करता है", "AI जो चेहरे पहचानता है"], c: 0 },
    { qE: "What is an algorithm?", qH: "एल्गोरिथ्म क्या है?", oE: ["A set of instructions for AI", "A type of computer", "A type of network", "A type of data"], oH: ["AI के लिए निर्देशों का एक सेट", "एक प्रकार का कंप्यूटर", "एक प्रकार का नेटवर्क", "एक प्रकार का डेटा"], c: 0 },
    { qE: "What is the role of AI in healthcare?", qH: "स्वास्थ्य देखभाल में AI की क्या भूमिका है?", oE: ["Diagnosis and treatment planning", "Cooking", "Cleaning", "Driving"], oH: ["निदान और उपचार योजना", "खाना पकाना", "सफाई", "ड्राइविंग"], c: 0 },
    { qE: "What is the role of AI in agriculture?", qH: "कृषि में AI की क्या भूमिका है?", oE: ["Crop monitoring and yield prediction", "Cooking", "Cleaning", "Building"], oH: ["फसल निगरानी और उपज भविष्यवाणी", "खाना पकाना", "सफाई", "भवन"], c: 0 }
  ]
},

// ---- Design Thinking (Advanced – 80 Questions) ----
"Module 9: Advanced Design Thinking": {
  questions: [
    { qE: "What is the first step in Design Thinking?", qH: "डिजाइन थिंकिंग में पहला कदम क्या है?", oE: ["Empathize", "Define", "Ideate", "Prototype"], oH: ["समानुभूति", "परिभाषित", "विचार", "प्रोटोटाइप"], c: 0 },
    { qE: "What is the second step in Design Thinking?", qH: "डिजाइन थिंकिंग में दूसरा कदम क्या है?", oE: ["Empathize", "Define", "Ideate", "Prototype"], oH: ["समानुभूति", "परिभाषित", "विचार", "प्रोटोटाइप"], c: 1 },
    { qE: "What is the third step in Design Thinking?", qH: "डिजाइन थिंकिंग में तीसरा कदम क्या है?", oE: ["Empathize", "Define", "Ideate", "Prototype"], oH: ["समानुभूति", "परिभाषित", "विचार", "प्रोटोटाइप"], c: 2 },
    { qE: "What is the fourth step in Design Thinking?", qH: "डिजाइन थिंकिंग में चौथा कदम क्या है?", oE: ["Empathize", "Define", "Ideate", "Prototype"], oH: ["समानुभूति", "परिभाषित", "विचार", "प्रोटोटाइप"], c: 3 },
    { qE: "What is the fifth step in Design Thinking?", qH: "डिजाइन थिंकिंग में पाँचवाँ कदम क्या है?", oE: ["Test", "Define", "Ideate", "Prototype"], oH: ["परीक्षण", "परिभाषित", "विचार", "प्रोटोटाइप"], c: 0 },
    { qE: "What does 'Empathize' mean in Design Thinking?", qH: "डिजाइन थिंकिंग में 'समानुभूति' का क्या अर्थ है?", oE: ["Understanding user needs", "Creating ideas", "Making a prototype", "Testing"], oH: ["उपयोगकर्ता की जरूरतों को समझना", "विचार बनाना", "प्रोटोटाइप बनाना", "परीक्षण"], c: 0 },
    { qE: "What does 'Define' mean in Design Thinking?", qH: "डिजाइन थिंकिंग में 'परिभाषित' का क्या अर्थ है?", oE: ["Defining the problem", "Understanding users", "Creating solutions", "Testing"], oH: ["समस्या को परिभाषित करना", "उपयोगकर्ताओं को समझना", "समाधान बनाना", "परीक्षण"], c: 0 },
    { qE: "What does 'Ideate' mean in Design Thinking?", qH: "डिजाइन थिंकिंग में 'विचार' का क्या अर्थ है?", oE: ["Generating ideas", "Defining problem", "Understanding users", "Testing"], oH: ["विचार उत्पन्न करना", "समस्या को परिभाषित करना", "उपयोगकर्ताओं को समझना", "परीक्षण"], c: 0 },
    { qE: "What does 'Prototype' mean in Design Thinking?", qH: "डिजाइन थिंकिंग में 'प्रोटोटाइप' का क्या अर्थ है?", oE: ["Building a model", "Generating ideas", "Defining problem", "Testing"], oH: ["एक मॉडल बनाना", "विचार उत्पन्न करना", "समस्या को परिभाषित करना", "परीक्षण"], c: 0 },
    { qE: "What does 'Test' mean in Design Thinking?", qH: "डिजाइन थिंकिंग में 'परीक्षण' का क्या अर्थ है?", oE: ["Testing the prototype with users", "Building a model", "Generating ideas", "Defining problem"], oH: ["उपयोगकर्ताओं के साथ प्रोटोटाइप का परीक्षण", "एक मॉडल बनाना", "विचार उत्पन्न करना", "समस्या को परिभाषित करना"], c: 0 },
    { qE: "Why is user feedback important in Design Thinking?", qH: "डिजाइन थिंकिंग में उपयोगकर्ता प्रतिक्रिया क्यों महत्वपूर्ण है?", oE: ["To improve the design", "To save time", "To reduce cost", "To finish quickly"], oH: ["डिज़ाइन को बेहतर बनाने के लिए", "समय बचाने के लिए", "लागत कम करने के लिए", "जल्दी खत्म करने के लिए"], c: 0 },
    { qE: "What is a prototype?", qH: "प्रोटोटाइप क्या है?", oE: ["A sample or model", "A final product", "A concept", "A design"], oH: ["एक नमूना या मॉडल", "एक अंतिम उत्पाद", "एक अवधारणा", "एक डिज़ाइन"], c: 0 },
    { qE: "What is the goal of Design Thinking?", qH: "डिजाइन थिंकिंग का लक्ष्य क्या है?", oE: ["Solve problems creatively", "Save money", "Save time", "Make money"], oH: ["रचनात्मक रूप से समस्याओं का समाधान करना", "पैसे बचाना", "समय बचाना", "पैसे कमाना"], c: 0 },
    { qE: "Design Thinking is a linear process.", qH: "डिजाइन थिंकिंग एक रैखिक प्रक्रिया है।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 1 },
    { qE: "Design Thinking is iterative.", qH: "डिजाइन थिंकिंग पुनरावृत्तीय है।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 0 },
    { qE: "Design Thinking focuses on user needs.", qH: "डिजाइन थिंकिंग उपयोगकर्ता की जरूरतों पर केंद्रित है।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 0 },
    { qE: "Design Thinking can be used in any field.", qH: "डिजाइन थिंकिंग का उपयोग किसी भी क्षेत्र में किया जा सकता है।", oE: ["True", "False"], oH: ["सत्य", "असत्य"], c: 0 },
    { qE: "What is a user persona?", qH: "उपयोगकर्ता व्यक्तित्व क्या है?", oE: ["A fictional user profile", "A real user", "A product", "A design"], oH: ["एक काल्पनिक उपयोगकर्ता प्रोफ़ाइल", "एक वास्तविक उपयोगकर्ता", "एक उत्पाद", "एक डिज़ाइन"], c: 0 },
    { qE: "What is a journey map?", qH: "जर्नी मैप क्या है?", oE: ["User's experience over time", "A road map", "A design plan", "A prototype"], oH: ["समय के साथ उपयोगकर्ता का अनुभव", "एक रोड मैप", "एक डिज़ाइन योजना", "एक प्रोटोटाइप"], c: 0 }
  ]
},

// ---- Advanced Entrepreneurship (100 Questions) ----
"Module 10: Advanced Entrepreneurship": {
  questions: [
    { qE: "What is a business model?", qH: "बिजनेस मॉडल क्या है?", oE: ["How a business makes money", "A product design", "A marketing plan", "A company name"], oH: ["एक व्यवसाय कैसे पैसा कमाता है", "एक उत्पाद डिज़ाइन", "एक मार्केटिंग योजना", "एक कंपनी का नाम"], c: 0 },
    { qE: "What is a revenue stream?", qH: "रेवेन्यू स्ट्रीम क्या है?", oE: ["Source of income for a business", "A type of cost", "A product", "A service"], oH: ["एक व्यवसाय के लिए आय का स्रोत", "एक प्रकार की लागत", "एक उत्पाद", "एक सेवा"], c: 0 },
    { qE: "What is a value proposition?", qH: "वैल्यू प्रोपोज़िशन क्या है?", oE: ["What makes a product valuable to customers", "A price", "A product name", "A logo"], oH: ["क्या एक उत्पाद को ग्राहकों के लिए मूल्यवान बनाता है", "एक कीमत", "एक उत्पाद का नाम", "एक लोगो"], c: 0 },
    { qE: "What is customer acquisition?", qH: "ग्राहक अधिग्रहण क्या है?", oE: ["Getting new customers", "Losing customers", "Saving customers", "Ignoring customers"], oH: ["नए ग्राहक प्राप्त करना", "ग्राहक खोना", "ग्राहकों को बचाना", "ग्राहकों को अनदेखा करना"], c: 0 },
    { qE: "What is customer retention?", qH: "ग्राहक प्रतिधारण क्या है?", oE: ["Keeping existing customers", "Getting new customers", "Losing customers", "Ignoring customers"], oH: ["मौजूदा ग्राहकों को बनाए रखना", "नए ग्राहक प्राप्त करना", "ग्राहक खोना", "ग्राहकों को अनदेखा करना"], c: 0 },
    { qE: "What is a target market?", qH: "टारगेट मार्केट क्या है?", oE: ["Group of customers a business aims to reach", "A product", "A competitor", "A supplier"], oH: ["ग्राहकों का समूह जिसे एक व्यवसाय तक पहुँचना चाहता है", "एक उत्पाद", "एक प्रतियोगी", "एक आपूर्तिकर्ता"], c: 0 },
    { qE: "What is a competitor analysis?", qH: "प्रतियोगी विश्लेषण क्या है?", oE: ["Analyzing business competitors", "Analyzing customers", "Analyzing products", "Analyzing prices"], oH: ["व्यवसाय प्रतियोगियों का विश्लेषण", "ग्राहकों का विश्लेषण", "उत्पादों का विश्लेषण", "कीमतों का विश्लेषण"], c: 0 },
    { qE: "What is a SWOT analysis?", qH: "SWOT विश्लेषण क्या है?", oE: ["Strengths, Weaknesses, Opportunities, Threats", "Sales, Wages, Orders, Taxes", "Sell, Work, Operate, Trade", "Save, Work, Offer, Tell"], oH: ["ताकत, कमजोरी, अवसर, खतरे", "बिक्री, मजदूरी, आदेश, कर", "बेचना, काम, संचालन, व्यापार", "बचाओ, काम, प्रस्ताव, बताओ"], c: 0 },
    { qE: "What is a business opportunity?", qH: "व्यवसाय अवसर क्या है?", oE: ["A chance to start a profitable business", "A risk", "A threat", "A loss"], oH: ["एक लाभदायक व्यवसाय शुरू करने का मौका", "एक जोखिम", "एक खतरा", "एक नुकसान"], c: 0 },
    { qE: "What is an entrepreneur?", qH: "उद्यमी क्या है?", oE: ["A person who starts a business", "A person who works for a company", "A student", "A teacher"], oH: ["एक व्यक्ति जो व्यवसाय शुरू करता है", "एक व्यक्ति जो एक कंपनी के लिए काम करता है", "एक छात्र", "एक शिक्षक"], c: 0 },
    { qE: "What is a startup?", qH: "स्टार्टअप क्या है?", oE: ["A new business venture", "An old company", "A government job", "A non-profit"], oH: ["एक नया व्यवसाय उद्यम", "एक पुरानी कंपनी", "एक सरकारी नौकरी", "एक गैर-लाभकारी संस्था"], c: 0 },
    { qE: "What is funding?", qH: "फंडिंग क्या है?", oE: ["Money for a business", "A product", "A service", "A customer"], oH: ["एक व्यवसाय के लिए पैसा", "एक उत्पाद", "एक सेवा", "एक ग्राहक"], c: 0 },
    { qE: "What is a loan?", qH: "ऋण क्या है?", oE: ["Borrowed money", "Saved money", "Invested money", "Spent money"], oH: ["उधार लिया गया पैसा", "बचाया गया पैसा", "निवेश किया गया पैसा", "खर्च किया गया पैसा"], c: 0 },
    { qE: "What is an investor?", qH: "निवेशक क्या है?", oE: ["A person who invests money in a business", "A customer", "A supplier", "A competitor"], oH: ["एक व्यक्ति जो एक व्यवसाय में पैसा निवेश करता है", "एक ग्राहक", "एक आपूर्तिकर्ता", "एक प्रतियोगी"], c: 0 },
    { qE: "What is a business pitch?", qH: "बिजनेस पिच क्या है?", oE: ["A short presentation about a business", "A long report", "A product demo", "A customer feedback"], oH: ["एक व्यवसाय के बारे में एक छोटी प्रस्तुति", "एक लंबी रिपोर्ट", "एक उत्पाद डेमो", "एक ग्राहक प्रतिक्रिया"], c: 0 },
    { qE: "What is a business plan?", qH: "व्यवसाय योजना क्या है?", oE: ["A document with business strategy", "A product design", "A customer list", "A supplier list"], oH: ["व्यवसाय रणनीति वाला एक दस्तावेज़", "एक उत्पाद डिज़ाइन", "एक ग्राहक सूची", "एक आपूर्तिकर्ता सूची"], c: 0 },
    { qE: "What is a market?", qH: "बाजार क्या है?", oE: ["A place where buyers and sellers meet", "A shop", "A product", "A company"], oH: ["एक स्थान जहाँ खरीदार और विक्रेता मिलते हैं", "एक दुकान", "एक उत्पाद", "एक कंपनी"], c: 0 },
    { qE: "What is a supply chain?", qH: "आपूर्ति श्रृंखला क्या है?", oE: ["System of producing and delivering products", "A marketing strategy", "A pricing strategy", "A customer strategy"], oH: ["उत्पादों के उत्पादन और वितरण की प्रणाली", "एक मार्केटिंग रणनीति", "एक मूल्य निर्धारण रणनीति", "एक ग्राहक रणनीति"], c: 0 },
    { qE: "What is a brand?", qH: "ब्रांड क्या है?", oE: ["Identity of a product or company", "A product", "A customer", "A supplier"], oH: ["एक उत्पाद या कंपनी की पहचान", "एक उत्पाद", "एक ग्राहक", "एक आपूर्तिकर्ता"], c: 0 }
  ]
},

// ---- Additional Digital Skills (100 Questions) ----
"Module 11: Advanced Digital Skills": {
  questions: [
    { qE: "What is a website?", qH: "वेबसाइट क्या है?", oE: ["A collection of web pages", "A computer", "A network", "A software"], oH: ["वेब पेजों का एक संग्रह", "एक कंप्यूटर", "एक नेटवर्क", "एक सॉफ्टवेयर"], c: 0 },
    { qE: "What is a web page?", qH: "वेब पेज क्या है?", oE: ["A single document on the web", "A website", "A computer", "A network"], oH: ["वेब पर एक एकल दस्तावेज़", "एक वेबसाइट", "एक कंप्यूटर", "एक नेटवर्क"], c: 0 },
    { qE: "What is a URL?", qH: "URL क्या है?", oE: ["Address of a web page", "A type of computer", "A type of network", "A type of software"], oH: ["एक वेब पेज का पता", "एक प्रकार का कंप्यूटर", "एक प्रकार का नेटवर्क", "एक प्रकार का सॉफ्टवेयर"], c: 0 },
    { qE: "What is a domain name?", qH: "डोमेन नाम क्या है?", oE: ["Name of a website", "A computer", "A network", "A software"], oH: ["एक वेबसाइट का नाम", "एक कंप्यूटर", "एक नेटवर्क", "एक सॉफ्टवेयर"], c: 0 },
    { qE: "What is a search engine?", qH: "सर्च इंजन क्या है?", oE: ["Tool to find information online", "A website", "A computer", "A network"], oH: ["ऑनलाइन जानकारी खोजने का उपकरण", "एक वेबसाइट", "एक कंप्यूटर", "एक नेटवर्क"], c: 0 },
    { qE: "What is a browser?", qH: "ब्राउज़र क्या है?", oE: ["Software to access the web", "A website", "A computer", "A network"], oH: ["वेब तक पहुँचने के लिए सॉफ्टवेयर", "एक वेबसाइट", "एक कंप्यूटर", "एक नेटवर्क"], c: 0 },
    { qE: "What is an app?", qH: "ऐप क्या है?", oE: ["Software application for mobile/computer", "A website", "A network", "A hardware"], oH: ["मोबाइल/कंप्यूटर के लिए सॉफ्टवेयर एप्लिकेशन", "एक वेबसाइट", "एक नेटवर्क", "एक हार्डवेयर"], c: 0 },
    { qE: "What is a password?", qH: "पासवर्ड क्या है?", oE: ["Secret code to access an account", "A username", "An email", "A phone number"], oH: ["खाते तक पहुँचने के लिए गुप्त कोड", "एक उपयोगकर्ता नाम", "एक ईमेल", "एक फोन नंबर"], c: 0 },
    { qE: "What is two-factor authentication?", qH: "दो-कारक प्रमाणीकरण क्या है?", oE: ["Two-step verification for security", "One password", "Two passwords", "No password"], oH: ["सुरक्षा के लिए दो-चरणीय सत्यापन", "एक पासवर्ड", "दो पासवर्ड", "कोई पासवर्ड नहीं"], c: 0 },
    { qE: "What is a firewall?", qH: "फ़ायरवॉल क्या है?", oE: ["Security system for networks", "A type of computer", "A type of software", "A type of hardware"], oH: ["नेटवर्क के लिए सुरक्षा प्रणाली", "एक प्रकार का कंप्यूटर", "एक प्रकार का सॉफ्टवेयर", "एक प्रकार का हार्डवेयर"], c: 0 },
    { qE: "What is phishing?", qH: "फ़िशिंग क्या है?", oE: ["Fake emails to steal information", "A type of software", "A type of hardware", "A type of network"], oH: ["जानकारी चुराने के लिए नकली ईमेल", "एक प्रकार का सॉफ्टवेयर", "एक प्रकार का हार्डवेयर", "एक प्रकार का नेटवर्क"], c: 0 },
    { qE: "What is malware?", qH: "मैलवेयर क्या है?", oE: ["Malicious software", "A type of computer", "A type of network", "A type of hardware"], oH: ["दुर्भावनापूर्ण सॉफ्टवेयर", "एक प्रकार का कंप्यूटर", "एक प्रकार का नेटवर्क", "एक प्रकार का हार्डवेयर"], c: 0 },
    { qE: "What is a virus?", qH: "वायरस क्या है?", oE: ["A type of malware", "A type of computer", "A type of network", "A type of hardware"], oH: ["एक प्रकार का मैलवेयर", "एक प्रकार का कंप्यूटर", "एक प्रकार का नेटवर्क", "एक प्रकार का हार्डवेयर"], c: 0 },
    { qE: "What is a trojan?", qH: "ट्रोजन क्या है?", oE: ["A type of malware that disguises as harmless", "A type of computer", "A type of network", "A type of hardware"], oH: ["एक प्रकार का मैलवेयर जो हानिरहित दिखता है", "एक प्रकार का कंप्यूटर", "एक प्रकार का नेटवर्क", "एक प्रकार का हार्डवेयर"], c: 0 },
    { qE: "What is ransomware?", qH: "रैंसमवेयर क्या है?", oE: ["Malware that locks data and demands payment", "A type of computer", "A type of network", "A type of hardware"], oH: ["मैलवेयर जो डेटा लॉक करता है और भुगतान की मांग करता है", "एक प्रकार का कंप्यूटर", "एक प्रकार का नेटवर्क", "एक प्रकार का हार्डवेयर"], c: 0 },
    { qE: "What is a cookie?", qH: "कुकी क्या है?", oE: ["Small file that stores user data", "A type of food", "A type of computer", "A type of network"], oH: ["छोटी फ़ाइल जो उपयोगकर्ता डेटा संग्रहीत करती है", "एक प्रकार का भोजन", "एक प्रकार का कंप्यूटर", "एक प्रकार का नेटवर्क"], c: 0 },
    { qE: "What is a digital certificate?", qH: "डिजिटल प्रमाणपत्र क्या है?", oE: ["Identity verification for websites", "A type of computer", "A type of network", "A type of software"], oH: ["वेबसाइटों के लिए पहचान सत्यापन", "एक प्रकार का कंप्यूटर", "एक प्रकार का नेटवर्क", "एक प्रकार का सॉफ्टवेयर"], c: 0 },
    { qE: "What is a digital signature?", qH: "डिजिटल हस्ताक्षर क्या है?", oE: ["Electronic verification of identity", "A type of computer", "A type of network", "A type of software"], oH: ["पहचान का इलेक्ट्रॉनिक सत्यापन", "एक प्रकार का कंप्यूटर", "एक प्रकार का नेटवर्क", "एक प्रकार का सॉफ्टवेयर"], c: 0 },
    { qE: "What is a VPN?", qH: "VPN क्या है?", oE: ["Virtual Private Network for secure connection", "A type of computer", "A type of network", "A type of software"], oH: ["सुरक्षित कनेक्शन के लिए वर्चुअल प्राइवेट नेटवर्क", "एक प्रकार का कंप्यूटर", "एक प्रकार का नेटवर्क", "एक प्रकार का सॉफ्टवेयर"], c: 0 }
  ]
},
// ================================================================
// ONLINE-TEST.HTML और QUESTIONBANK.HTML के लिए EXPORT
// ================================================================
window.QUESTION_BANK = {
  employability: EMPLOYABILITY_BANK   // ← यहाँ आपका EMPLOYABILITY_BANK है
};

console.log("✅ Question Bank Loaded Successfully!");
console.log("📊 Available Trades:", Object.keys(window.QUESTION_BANK));

// ---- Extra Topics – Communication & Soft Skills (100 Questions) ----
"Module 12: Communication & Soft Skills": {
  questions: [
    { qE: "What is active listening?", qH: "सक्रिय सुनना क्या है?", oE: ["Listening with full attention", "Listening partially", "Not listening", "Ignoring"], oH: ["पूरा ध्यान से सुनना", "आंशिक रूप से सुनना", "न सुनना", "अनदेखा करना"], c: 0 },
    { qE: "What is feedback?", qH: "प्रतिक्रिया क्या है?", oE: ["Constructive response about performance", "A complaint", "A compliment", "A suggestion"], oH: ["प्रदर्शन के बारे में रचनात्मक प्रतिक्रिया", "एक शिकायत", "एक प्रशंसा", "एक सुझाव"], c: 0 },
    { qE: "What is constructive criticism?", qH: "रचनात्मक आलोचना क्या है?", oE: ["Criticism that helps improve", "Criticism that hurts", "Criticism that is unfair", "Criticism that is negative"], oH: ["आलोचना जो सुधारने में मदद करती है", "आलोचना जो चोट पहुँचाती है", "आलोचना जो अनुचित है", "आलोचना जो नकारात्मक है"], c: 0 },
    { qE: "What is body language?", qH: "शारीरिक भाषा क्या है?", oE: ["Non-verbal communication", "Verbal communication", "Written communication", "Visual communication"], oH: ["गैर-मौखिक संचार", "मौखिक संचार", "लिखित संचार", "दृश्य संचार"], c: 0 },
    { qE: "What is empathy?", qH: "सहानुभूति क्या है?", oE: ["Understanding others' feelings", "Ignoring others", "Being selfish", "Being rude"], oH: ["दूसरों की भावनाओं को समझना", "दूसरों की अनदेखी करना", "स्वार्थी होना", "अशिष्ट होना"], c: 0 },
    { qE: "What is courtesy?", qH: "शिष्टता क्या है?", oE: ["Politeness and respect", "Rudeness", "Ignorance", "Arrogance"], oH: ["शिष्टता और सम्मान", "अशिष्टता", "अज्ञानता", "अहंकार"], c: 0 },
    { qE: "What is teamwork?", qH: "टीम वर्क क्या है?", oE: ["Working together", "Working alone", "Competing", "Fighting"], oH: ["एक साथ काम करना", "अकेले काम करना", "प्रतिस्पर्धा", "लड़ना"], c: 0 },
    { qE: "What is leadership?", qH: "नेतृत्व क्या है?", oE: ["Guiding and inspiring others", "Bossing others", "Following others", "Working alone"], oH: ["दूसरों का मार्गदर्शन और प्रेरणा", "दूसरों को बॉस करना", "दूसरों का अनुसरण करना", "अकेले काम करना"], c: 0 },
    { qE: "What is problem-solving?", qH: "समस्या-समाधान क्या है?", oE: ["Finding solutions to problems", "Creating problems", "Ignoring problems", "Waiting for others"], oH: ["समस्याओं का समाधान खोजना", "समस्याएँ पैदा करना", "समस्याओं को अनदेखा करना", "दूसरों की प्रतीक्षा करना"], c: 0 },
    { qE: "What is decision-making?", qH: "निर्णय-निर्माण क्या है?", oE: ["Choosing between options", "Ignoring options", "Following others", "Avoiding choices"], oH: ["विकल्पों के बीच चयन करना", "विकल्पों को अनदेखा करना", "दूसरों का अनुसरण करना", "विकल्पों से बचना"], c: 0 },
    { qE: "What is time management?", qH: "समय प्रबंधन क्या है?", oE: ["Organizing time effectively", "Wasting time", "Ignoring time", "Being late"], oH: ["समय को प्रभावी ढंग से व्यवस्थित करना", "समय बर्बाद करना", "समय को अनदेखा करना", "देर होना"], c: 0 },
    { qE: "What is stress management?", qH: "तनाव प्रबंधन क्या है?", oE: ["Techniques to cope with stress", "Ignoring stress", "Increasing stress", "Avoiding all work"], oH: ["तनाव से निपटने की तकनीकें", "तनाव को अनदेखा करना", "तनाव बढ़ाना", "सभी काम से बचना"], c: 0 }
  ]
}
<!DOCTYPE html>
<html lang="hi">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ITI Question Bank | ITI Study Centre</title>
  <meta name="description" content="ITI Question Bank - Employability Skills, Fitter, Plumber and Other Trade Question Bank with Chapter Wise Questions.">
  <link rel="icon" href="/images/favicon.png">
  <link rel="stylesheet" href="/css/style.css">
  <link rel="canonical" href="https://www.itistudycentre.in/questionbank.html">
</head>

<body>

<!-- =========================================
    HEADER
========================================= -->
<div class="main-header" style="background:#003366; padding:12px 0; border-bottom:3px solid #ffcc00;">
<div class="main-header" style="background:#003366; padding:12px 0; border-bottom:3px solid #ffcc00;">
  <div class="container" style="max-width:1200px; margin:0 auto; padding:0 15px; display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between;">
    <div class="logo" style="font-size:1.4rem; font-weight:bold;">
      <a href="/index.html" style="color:white; text-decoration:none;">ITI Study Centre</a>
    </div>
    <nav style="display:flex; flex-wrap:wrap; gap:5px 15px;">
      <a href="/index.html" style="color:white; text-decoration:none; padding:5px 0; font-size:1rem;">Home</a>
      <a href="/iti-result.html" style="color:white; text-decoration:none; padding:5px 0; font-size:1rem;">ITI Result</a>
      <a href="/iti-study-centre-notes.html" style="color:#ffcc00; text-decoration:underline; font-weight:bold; padding:5px 0; font-size:1rem;">ITI Notes</a>
      <a href="/engineering-notes.html" style="color:white; text-decoration:none; padding:5px 0; font-size:1rem;">Engineering Notes</a>
      <a href="/questionbank.html" style="color:white; text-decoration:none; padding:5px 0; font-size:1rem;">Question Bank</a>
      <a href="/online-test.html" class="test-link" style="color:#ff9900; font-weight:700; padding:5px 0; font-size:1rem;">📝 Online Test</a>
      <a href="/about.html" style="color:white; text-decoration:none; padding:5px 0; font-size:1rem;">About</a>
    </nav>
  </div>
</div>
</div>

<!-- =========================================
    BREADCRUMB
========================================= -->
<div id="breadcrumb" style="background:#f0f0f0; padding:8px 20px; font-size:0.9rem; border-bottom:1px solid #ddd;">
  <a href="/" style="text-decoration:none; color:#003366;">🏠 Home</a> &nbsp;›&nbsp; <span style="color:#555; font-weight:bold;">Question Bank</span>
</div>

<!-- =========================================
    PAGE TITLE
========================================= -->
<section class="page-title">
  <div class="container">
    <h1>📚 ITI Question Bank</h1>
    <p>Module Wise, Chapter Wise & Previous Year Questions for All Trades</p>
  </div>
</section>

<!-- =========================================
    SEARCH BOX
========================================= -->
<section class="search-section container">
  <input type="text" placeholder="Search Questions by Trade, Module, or Topic...">
  <button>🔍 Search</button>
</section>

<!-- =========================================
    QUESTION BANK CARDS
========================================= -->
<section class="container">
  <div class="card">
    <h2>📖 अपनी Trade चुनें</h2>
    <div class="home-card-grid">

      <!-- 1. Employability Skills -->
      <div class="feature-card">
        <h3>📘 Employability Skills</h3>
        <p>सभी 11 Modules के Chapter Wise & Previous Year Question Bank.</p>
        <a href="/question-bank/employability-skills/index.html" class="news-btn">📘 Click Here →</a>
      </div>

      <!-- 2. Fitter -->
      <div class="feature-card">
        <h3>🔧 Fitter Trade</h3>
        <p>Module Wise, CBT Pattern & Previous Year Questions.</p>
        <a href="/question-bank/fitter/index.html" class="news-btn">🔧 Click Here →</a>
      </div>

      <!-- 3. Plumber -->
      <div class="feature-card">
        <h3>🚰 Plumber Trade</h3>
        <p>Module Wise & Chapter Wise Practice Question Bank.</p>
        <a href="/question-bank/plumber/index.html" class="news-btn">🚰 Click Here →</a>
      </div>

      <!-- 4. Other Trades -->
      <div class="feature-card">
        <h3>🛠️ Other Trades</h3>
        <p>Electrician, COPA, Welder, Diesel Mechanic, Turner, Machinist, Wireman, Electronics, Refrigeration & AC, and more.</p>
        <a href="/question-bank/other-trades/index.html" class="news-btn">🛠️ Click Here →</a>
      </div>

    </div>
  </div>
</section>

<!-- =========================================
    FEATURES (Why Question Bank)
========================================= -->
<section class="container">
  <div class="card">
    <h2>✨ Question Bank की विशेषताएँ</h2>
    <ul>
      <li>✅ Module Wise & Chapter Wise Questions</li>
      <li>✅ Previous Year Questions</li>
      <li>✅ CBT Pattern Practice</li>
      <li>✅ परीक्षा की दृष्टि से महत्वपूर्ण प्रश्न</li>
      <li>✅ Regular Updates</li>
      <li>✅ बिल्कुल Free Study Material</li>
    </ul>
  </div>
</section>

<!-- =========================================
    SUGGESTIONS
========================================= -->
<section class="container">
  <div class="card">
    <h2>💬 सुझाव दें</h2>
    <p>यदि आप किसी नए Trade, Chapter या Topic के Question Bank चाहते हैं, तो हमें अवश्य बताएं।</p>
    <br>
    <a href="/contact.html" class="news-btn">💬 Click Here →</a>
  </div>
</section>

<!-- =========================================
    FOOTER
========================================= -->
<footer style="background:#222; color:#ccc; padding:20px 15px; text-align:center; margin-top:40px; border-top:4px solid #003366;">
  <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:10px 20px; margin-bottom:10px;">
    <a href="/disclaimer.html" style="color:#aaa; text-decoration:none;">Disclaimer</a>
    <a href="/privacy-policy.html" style="color:#aaa; text-decoration:none;">Privacy Policy</a>
    <a href="/terms.html" style="color:#aaa; text-decoration:none;">Terms</a>
    <a href="/contact.html" style="color:#aaa; text-decoration:none;">Contact</a>
  </div>
  <p style="margin:10px 0 0 0; color:#888;">© 2026 ITI Study Centre. All Rights Reserved.</p>
</footer>

<button id="scrollTop" title="Go to Top" style="position:fixed; bottom:20px; right:20px; background:#003366; color:white; border:none; padding:10px 15px; border-radius:5px; cursor:pointer;">⬆</button>
<script src="/js/main.js"></script>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    const year = document.querySelector('footer p');
    if (year) {
      year.textContent = "© " + new Date().getFullYear() + " ITI Study Centre. All Rights Reserved.";
    }
  });
</script>

</body>
</html>
// ================================================================
// ✅ यह LINE बिल्कुल अंत में जोड़ें – MISS न करें
// ================================================================
window.QUESTION_BANK = {
  employability: EMPLOYABILITY_BANK
};

console.log("✅ QUESTION_BANK exported successfully!");
console.log("📊 Available Trades:", Object.keys(window.QUESTION_BANK));
