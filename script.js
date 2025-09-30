const chatWindow = document.getElementById("chat-window");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const suggestionBox = document.getElementById("suggestion-box");

const healthFAQ = {
  // Greetings
  "hi": "🤖 MITHRA: Hello! How can I help you today?",
  "hello": "🤖 MITHRA: Hi there! Ask me any health-related question.",
  "hey": "🤖 MITHRA: Hey! I'm MITHRA, your health assistant.",
  "how are you": "🤖 MITHRA: I'm an AI chatbot, always ready to assist you!",
  "good morning": "🤖 MITHRA: Good morning! How can I help you today?",
  "good evening": "🤖 MITHRA: Good evening! Do you have any health queries?",
  "thanks": "🤖 MITHRA: You're welcome!",
  "thank you": "🤖 MITHRA: Happy to help!",
  "bye": "🤖 MITHRA: Goodbye! Stay healthy!",
  "good night": "🤖 MITHRA: Good night! Take care of your health.",

  // General Health
  "what is health": "🤖 MITHRA: Health is a state of complete physical, mental, and social well-being.",
  "why is health important": "🤖 MITHRA: Health is important because it allows us to live productively and happily.",
  "how to stay healthy": "🤖 MITHRA: Eat balanced food, exercise daily, sleep well, and manage stress.",
  "how to improve health": "🤖 MITHRA: Small changes like good diet, regular workouts, and avoiding smoking help a lot.",
  "tips for healthy life": "🤖 MITHRA: Eat fruits, drink water, avoid junk food, and sleep at least 7-9 hours daily.",

  // Common Illnesses
  "fever": "🤖 MITHRA: Fever is a rise in body temperature. Drink fluids, rest, and consult a doctor if it persists.",
  "cold": "🤖 MITHRA: For a common cold, rest well, drink fluids, and take vitamin C.",
  "flu": "🤖 MITHRA: Flu symptoms include fever, cough, sore throat, fatigue, and body aches.",
  "headache": "🤖 MITHRA: Headaches can be caused by stress, dehydration, or lack of sleep.",
  "migraine": "🤖 MITHRA: Migraines are severe headaches. Rest in a dark room and consult a doctor if frequent.",
  "stomach ache": "🤖 MITHRA: Stomach ache can be due to indigestion, gas, or infection. Stay hydrated and eat light food.",
  "diarrhea": "🤖 MITHRA: Drink plenty of fluids, avoid junk food, and consult a doctor if severe.",
  "constipation": "🤖 MITHRA: Eat high-fiber foods, drink water, and exercise regularly.",
  "vomiting": "🤖 MITHRA: Vomiting can be caused by infection or food issues. Stay hydrated and rest.",
  "cough": "🤖 MITHRA: A cough may result from allergies, cold, or infections. Drink warm fluids and consult if prolonged.",
  "sore throat": "🤖 MITHRA: Gargle with warm salt water, drink warm fluids, and rest your voice.",

  // Chronic Conditions
  "diabetes": "🤖 MITHRA: Diabetes affects blood sugar. Eat healthy and exercise regularly.",
  "blood sugar": "🤖 MITHRA: Maintain normal blood sugar with diet, exercise, and medicines if prescribed.",
  "blood pressure": "🤖 MITHRA: Normal blood pressure is around 120/80 mmHg.",
  "hypertension": "🤖 MITHRA: Hypertension is high blood pressure. Reduce salt, exercise, and monitor regularly.",
  "heart disease": "🤖 MITHRA: Eat healthy, exercise, avoid smoking, and monitor cholesterol levels.",
  "obesity": "🤖 MITHRA: Maintain healthy weight with balanced diet and regular exercise.",
  "cholesterol": "🤖 MITHRA: Keep cholesterol in check by avoiding fatty foods and exercising regularly.",
  "asthma": "🤖 MITHRA: Asthma affects breathing. Avoid triggers and carry inhalers if prescribed.",
  "arthritis": "🤖 MITHRA: Arthritis causes joint pain. Exercise lightly, eat anti-inflammatory foods, and consult a doctor.",
  "thyroid": "🤖 MITHRA: Thyroid imbalance affects energy and weight. Regular checkups and medicines help.",
  "cancer": "🤖 MITHRA: Early detection improves treatment outcomes. Avoid smoking and maintain healthy lifestyle.",

  // Preventive Health
  "exercise": "🤖 MITHRA: Regular exercise improves physical and mental health.",
  "healthy diet": "🤖 MITHRA: Eat fruits, vegetables, whole grains, lean proteins, and avoid excessive sugar.",
  "hydration": "🤖 MITHRA: Drink at least 8 glasses of water daily for proper hydration.",
  "sleep": "🤖 MITHRA: Aim for 7-9 hours of quality sleep every day.",
  "stress": "🤖 MITHRA: Practice mindfulness, meditation, and deep breathing to reduce stress.",
  "mental health": "🤖 MITHRA: Take breaks, socialize, and consult a professional if needed.",
  "vaccination": "🤖 MITHRA: Vaccines protect against many diseases. Follow the vaccination schedule.",
  "hygiene": "🤖 MITHRA: Wash hands frequently, cover your mouth when sneezing, and maintain personal hygiene.",
  "sun safety": "🤖 MITHRA: Protect skin by using sunscreen and avoiding too much sun exposure.",
  "first aid": "🤖 MITHRA: Keep a basic first aid kit with bandages, antiseptic, and pain relief.",

  // Women's Health
  "menstruation": "🤖 MITHRA: Maintain hygiene during periods, and consult a doctor if pain is severe.",
  "pregnancy": "🤖 MITHRA: Eat nutritious food, stay hydrated, and consult your doctor regularly.",
  "breast health": "🤖 MITHRA: Regular self-checks and mammograms help early detection of breast issues.",
  "pcos": "🤖 MITHRA: PCOS affects hormones. Balanced diet, exercise, and doctor guidance help manage it.",
  "menopause": "🤖 MITHRA: Menopause is a natural phase. Lifestyle changes and support help ease symptoms.",

  // Men's Health
  "prostate health": "🤖 MITHRA: Regular checkups and healthy lifestyle help maintain prostate health.",
  "sexual health": "🤖 MITHRA: Practice safe sex, get tested, and consult a doctor for concerns.",
  "fertility": "🤖 MITHRA: Healthy diet, stress reduction, and lifestyle habits improve fertility.",

  // Children & Elderly
  "child health": "🤖 MITHRA: Ensure balanced diet, vaccinations, and regular exercise for children.",
  "elderly health": "🤖 MITHRA: Focus on diet, exercise, regular checkups, and mental well-being for seniors.",
  "immunity": "🤖 MITHRA: Eat healthy, exercise, sleep well, and avoid stress to boost immunity.",
  "nutrition": "🤖 MITHRA: Include proteins, vitamins, and minerals in your diet for overall health.",
  "growth": "🤖 MITHRA: Children need protein, calcium, and vitamins for proper growth.",

  // Emergencies
  "chest pain": "🤖 MITHRA: Chest pain can be serious. Call emergency services immediately.",
  "shortness of breath": "🤖 MITHRA: Seek medical attention immediately if severe.",
  "injury": "🤖 MITHRA: Clean the wound, apply antiseptic, and consult a doctor if needed.",
  "poisoning": "🤖 MITHRA: Call emergency services and follow poison control instructions.",
  "burn": "🤖 MITHRA: Run cool water over burn, cover lightly, and seek medical care if severe.",
  "fracture": "🤖 MITHRA: Immobilize the area and seek immediate medical help.",

  // COVID
  "covid": "🤖 MITHRA: COVID-19 is caused by coronavirus. Wash hands, wear masks, and maintain distance.",
  "covid symptoms": "🤖 MITHRA: Symptoms include fever, cough, fatigue, and loss of taste or smell.",
  "covid prevention": "🤖 MITHRA: Vaccination, masks, handwashing, and distancing prevent spread.",
  "covid recovery": "🤖 MITHRA: Rest, hydration, and follow doctor's advice after COVID infection.",
  "long covid": "🤖 MITHRA: Some may face fatigue and breathing issues post-COVID. Consult doctor.",

  // Lifestyle & Daily
  "why exercise": "🤖 MITHRA: Exercise improves fitness, mental health, and prevents chronic diseases.",
  "why eat healthy": "🤖 MITHRA: Healthy eating provides essential nutrients and reduces disease risk.",
  "how to reduce stress": "🤖 MITHRA: Practice meditation, deep breathing, and regular exercise.",
  "how to lose weight": "🤖 MITHRA: Combine balanced diet, regular exercise, and sufficient sleep.",
  "how to gain weight": "🤖 MITHRA: Eat protein-rich foods, healthy fats, and perform strength training.",
  "what is immunity": "🤖 MITHRA: Immunity is the body's ability to fight infections and stay healthy.",
  "how to improve immunity": "🤖 MITHRA: Eat nutritious food, sleep well, exercise, and manage stress.",
  "what is mental health": "🤖 MITHRA: Mental health includes emotional, psychological, and social well-being.",
  "how to improve mental health": "🤖 MITHRA: Practice mindfulness, social interaction, and seek help when needed.",

  // Nutrition & Diet
  "what is nutrition": "🤖 MITHRA: Nutrition is the process of providing the body with necessary food for health and growth.",
  "why is nutrition important": "🤖 MITHRA: Good nutrition helps prevent disease, supports growth, and boosts immunity.",
  "what is a balanced diet": "🤖 MITHRA: A balanced diet includes fruits, vegetables, whole grains, protein, and healthy fats.",
  "best diet for weight loss": "🤖 MITHRA: A diet rich in vegetables, lean protein, and low in processed foods helps weight loss.",
  "best diet for weight gain": "🤖 MITHRA: Include nuts, seeds, dairy, eggs, and healthy fats along with strength training.",
  "best diet for diabetes": "🤖 MITHRA: Whole grains, vegetables, lean proteins, and limited sugars help control diabetes.",
  "foods for strong bones": "🤖 MITHRA: Calcium-rich foods like milk, yogurt, and leafy greens strengthen bones.",
  "foods for brain health": "🤖 MITHRA: Omega-3 fish, nuts, berries, and green vegetables support brain function.",
  "foods for heart health": "🤖 MITHRA: Oats, nuts, olive oil, fish, and fruits improve heart health.",
  "foods for skin glow": "🤖 MITHRA: Hydration, fruits, vitamin C, and antioxidants help skin stay healthy.",
  "foods for hair growth": "🤖 MITHRA: Protein, iron, and vitamins from eggs, spinach, and nuts support hair growth.",
  "foods rich in vitamin c": "🤖 MITHRA: Citrus fruits, guava, bell peppers, and strawberries are rich in vitamin C.",
  "foods rich in vitamin d": "🤖 MITHRA: Sunlight, fortified milk, and fish provide vitamin D.",
  "foods rich in iron": "🤖 MITHRA: Spinach, lentils, red meat, and beans are good iron sources.",
  "foods rich in protein": "🤖 MITHRA: Eggs, chicken, fish, tofu, lentils, and beans provide protein.",
  "foods rich in calcium": "🤖 MITHRA: Dairy, almonds, and leafy greens are calcium-rich.",
  "foods rich in fiber": "🤖 MITHRA: Whole grains, fruits, vegetables, and legumes provide fiber.",
  "foods rich in antioxidants": "🤖 MITHRA: Blueberries, green tea, and dark chocolate are antioxidant-rich.",

  // Exercise & Fitness
  "what is exercise": "🤖 MITHRA: Exercise is physical activity that improves fitness and health.",
  "why is exercise important": "🤖 MITHRA: Exercise strengthens muscles, heart, and improves mood.",
  "types of exercise": "🤖 MITHRA: Cardio, strength training, flexibility, and balance exercises.",
  "best exercise for weight loss": "🤖 MITHRA: Running, cycling, swimming, and HIIT are effective for weight loss.",
  "best exercise for weight gain": "🤖 MITHRA: Strength training builds muscle mass along with proper diet.",
  "best exercise for heart health": "🤖 MITHRA: Brisk walking, swimming, and cycling improve heart health.",
  "exercise for kids": "🤖 MITHRA: Outdoor play, running, and sports keep kids healthy.",
  "exercise for seniors": "🤖 MITHRA: Walking, yoga, and light strength training are good for elderly health.",
  "yoga benefits": "🤖 MITHRA: Yoga improves flexibility, reduces stress, and boosts immunity.",
  "meditation benefits": "🤖 MITHRA: Meditation reduces stress, improves focus, and supports mental health.",
  "walking benefits": "🤖 MITHRA: Walking improves heart health, burns calories, and reduces stress.",
  "running benefits": "🤖 MITHRA: Running builds stamina, burns fat, and strengthens heart and lungs.",
  "cycling benefits": "🤖 MITHRA: Cycling improves fitness, reduces stress, and supports joint health.",
  "swimming benefits": "🤖 MITHRA: Swimming builds endurance, strengthens muscles, and improves lung capacity.",
  "strength training benefits": "🤖 MITHRA: It builds muscles, boosts metabolism, and supports bone strength.",
  "stretching benefits": "🤖 MITHRA: Stretching improves flexibility, posture, and reduces injury risk.",
  "how much exercise per day": "🤖 MITHRA: Adults should aim for at least 30 minutes of moderate exercise daily.",

  // Sleep & Rest
  "why is sleep important": "🤖 MITHRA: Sleep restores energy, repairs the body, and supports brain function.",
  "how many hours of sleep": "🤖 MITHRA: Adults need 7–9 hours, teens 8–10 hours, children 9–12 hours.",
  "what is insomnia": "🤖 MITHRA: Insomnia is difficulty falling or staying asleep.",
  "causes of insomnia": "🤖 MITHRA: Stress, caffeine, irregular schedule, or medical conditions can cause insomnia.",
  "how to sleep better": "🤖 MITHRA: Maintain routine, avoid screens, and relax before bedtime.",
  "what is sleep apnea": "🤖 MITHRA: A disorder where breathing repeatedly stops during sleep. Needs medical care.",
  "what are dreams": "🤖 MITHRA: Dreams are thoughts, images, or sensations during sleep.",
  "why do we dream": "🤖 MITHRA: Dreams help process emotions and memories, though science is still studying them.",
  "importance of naps": "🤖 MITHRA: Short naps improve alertness and memory.",
  "best sleeping position": "🤖 MITHRA: Sleeping on your back or side supports the spine.",

  // Mental Health
  "what is stress": "🤖 MITHRA: Stress is the body's reaction to pressure or challenges.",
  "how to reduce stress": "🤖 MITHRA: Meditation, deep breathing, and exercise reduce stress.",
  "what is anxiety": "🤖 MITHRA: Anxiety is excessive worry or fear about everyday situations.",
  "how to reduce anxiety": "🤖 MITHRA: Breathing exercises, therapy, and relaxation help reduce anxiety.",
  "what is depression": "🤖 MITHRA: Depression is a mood disorder causing sadness and loss of interest.",
  "signs of depression": "🤖 MITHRA: Sadness, fatigue, sleep problems, and loss of interest in activities.",
  "how to treat depression": "🤖 MITHRA: Therapy, medication, exercise, and support can help.",
  "what is mindfulness": "🤖 MITHRA: Mindfulness is being fully present in the moment without judgment.",
  "benefits of mindfulness": "🤖 MITHRA: It reduces stress, improves focus, and supports emotional well-being.",
  "what is therapy": "🤖 MITHRA: Therapy is professional support for mental health and emotional challenges.",
  "what is counseling": "🤖 MITHRA: Counseling is guidance provided by professionals to resolve personal issues.",
  "importance of mental health": "🤖 MITHRA: Good mental health improves relationships, productivity, and happiness.",
  "what is burnout": "🤖 MITHRA: Burnout is physical and mental exhaustion caused by stress and overwork.",
  "how to recover from burnout": "🤖 MITHRA: Rest, set boundaries, and seek support from others.",

  // First Aid Basics
  "first aid for burns": "🤖 MITHRA: Cool burn under water, cover lightly, and seek care if severe.",
  "first aid for cuts": "🤖 MITHRA: Clean with water, apply antiseptic, and cover with a bandage.",
  "first aid for nosebleed": "🤖 MITHRA: Sit upright, lean forward, and pinch nose until bleeding stops.",
  "first aid for fainting": "🤖 MITHRA: Lay person down, elevate legs, and loosen tight clothing.",
  "first aid for choking": "🤖 MITHRA: Perform Heimlich maneuver or back blows if person cannot breathe.",
  "first aid for insect bite": "🤖 MITHRA: Wash area, apply ice, and use anti-itch cream.",
  "first aid for snake bite": "🤖 MITHRA: Keep person still, avoid movement, and seek immediate medical care.",
  "first aid for fracture": "🤖 MITHRA: Immobilize area and get medical help quickly.",
  "first aid for heart attack": "🤖 MITHRA: Call emergency, keep person calm, and give aspirin if advised.",
  "first aid for stroke": "🤖 MITHRA: Act FAST – Face drooping, Arm weakness, Speech issues, Time to call emergency.",

  // Hygiene
  "importance of hygiene": "🤖 MITHRA: Hygiene prevents diseases and keeps the body clean.",
  "types of hygiene": "🤖 MITHRA: Personal hygiene, food hygiene, and environmental hygiene.",
  "hand washing importance": "🤖 MITHRA: Washing hands prevents infections and disease spread.",
  "oral hygiene tips": "🤖 MITHRA: Brush twice daily, floss, and visit dentist regularly.",
  "bath importance": "🤖 MITHRA: Regular bathing removes germs and refreshes the body.",
  "nail hygiene": "🤖 MITHRA: Trim and clean nails to avoid bacterial infections.",
  "hair hygiene": "🤖 MITHRA: Wash regularly and keep scalp clean to prevent dandruff and lice.",

  // Vaccination
  "what is vaccination": "🤖 MITHRA: Vaccination protects against infectious diseases by building immunity.",
  "importance of vaccination": "🤖 MITHRA: Vaccines save lives by preventing serious illnesses.",
  "child vaccination": "🤖 MITHRA: Children should follow routine immunization schedule.",
  "adult vaccination": "🤖 MITHRA: Adults may need vaccines for flu, tetanus, and travel-related diseases.",
  "flu vaccine": "🤖 MITHRA: Annual flu shots reduce risk of influenza.",
  "covid vaccine": "🤖 MITHRA: COVID-19 vaccines reduce severity and spread of infection.",
  "hepatitis vaccine": "🤖 MITHRA: Protects against liver infection caused by hepatitis virus.",
  "hpv vaccine": "🤖 MITHRA: Protects against human papillomavirus that can cause cancer.",

  // Additional entries
  "symptoms of stress|signs of stress": "🤖 MITHRA: Headache, fatigue, irritability, poor sleep, difficulty concentrating.",
  "how to reduce stress|ways to manage stress": "🤖 MITHRA: Practice relaxation, deep breathing, meditation, yoga, exercise, and proper rest.",
  "symptoms of anxiety|signs of anxiety": "🤖 MITHRA: Restlessness, rapid heartbeat, sweating, difficulty concentrating, irritability.",
  "how to manage anxiety": "🤖 MITHRA: Relaxation techniques, mindfulness, talking to a friend, therapy, and healthy routines.",
  "symptoms of depression": "🤖 MITHRA: Feeling sad, hopelessness, lack of energy, poor sleep, loss of appetite, loss of interest.",
  "how to treat depression": "🤖 MITHRA: Therapy, lifestyle changes, medication (if prescribed), and strong social support.",
  "importance of sleep": "🤖 MITHRA: Good sleep restores the body, boosts immunity, and supports mental health.",
  "how many hours of sleep are needed": "🤖 MITHRA: Adults need 7–9 hours, teens need 8–10 hours, children need more depending on age.",
  "what causes insomnia": "🤖 MITHRA: Stress, caffeine, irregular routines, depression, or certain medications.",
  "how to improve sleep|tips for better sleep": "🤖 MITHRA: Maintain a routine, avoid screens before bed, limit caffeine, and keep the room dark and cool.",
  "causes of obesity": "🤖 MITHRA: Overeating, sedentary lifestyle, genetics, and hormonal imbalances.",
  "how to prevent obesity": "🤖 MITHRA: Balanced diet, regular exercise, portion control, and avoiding junk food.",
  "symptoms of diabetes": "🤖 MITHRA: Frequent urination, thirst, fatigue, slow healing wounds, blurry vision.",
  "how to manage diabetes": "🤖 MITHRA: Healthy eating, regular activity, monitoring sugar, and taking medicines if prescribed.",
  "symptoms of high blood pressure": "🤖 MITHRA: Often none; sometimes headaches, dizziness, or nosebleeds.",
  "how to prevent hypertension": "🤖 MITHRA: Reduce salt, exercise, maintain weight, avoid smoking and alcohol.",
  "symptoms of heart attack": "🤖 MITHRA: Chest pain, shortness of breath, sweating, pain in arms/jaw/back.",
  "first aid for heart attack": "🤖 MITHRA: Call emergency services, keep the person calm, give aspirin if available.",
  "symptoms of stroke": "🤖 MITHRA: Face drooping, arm weakness, speech difficulty (FAST test).",
  "first aid for stroke": "🤖 MITHRA: Call emergency immediately, keep patient safe and calm.",
  "symptoms of asthma": "🤖 MITHRA: Wheezing, shortness of breath, chest tightness, coughing at night.",
  "treatment of asthma": "🤖 MITHRA: Inhalers, avoiding triggers, and following medical advice.",
  "symptoms of allergy": "🤖 MITHRA: Sneezing, itching, runny nose, skin rash, swelling.",
  "treatment for allergy": "🤖 MITHRA: Avoid allergens, take antihistamines, or use prescribed medicines.",
  "symptoms of migraine": "🤖 MITHRA: Throbbing headache, vision problems, nausea, sensitivity to sound/light.",
  "treatment for migraine": "🤖 MITHRA: Rest in a dark room, hydration, pain relief medicines, avoid triggers.",
  "importance of exercise": "🤖 MITHRA: Exercise improves heart health, strengthens muscles, and boosts mood.",
  "how much exercise is needed daily": "🤖 MITHRA: At least 30 minutes of moderate activity most days of the week.",
  "benefits of yoga": "🤖 MITHRA: Improves flexibility, reduces stress, strengthens the body, and calms the mind.",
  "benefits of meditation": "🤖 MITHRA: Reduces stress, improves focus, supports emotional health.",
  "steps of CPR": "🤖 MITHRA: Check response, call emergency, give chest compressions, rescue breaths if trained.",
  "first aid for choking": "🤖 MITHRA: Encourage coughing, give abdominal thrusts (Heimlich maneuver) if needed.",
  "symptoms of dehydration": "🤖 MITHRA: Thirst, dry mouth, dizziness, dark urine, fatigue.",
  "how to prevent dehydration": "🤖 MITHRA: Drink enough water daily, especially in hot weather or during exercise.",
  "importance of balanced diet": "🤖 MITHRA: Provides energy, supports immunity, and prevents disease.",
  "what are proteins": "🤖 MITHRA: Proteins are body-building nutrients found in eggs, fish, beans, and meat.",
  "what are carbohydrates": "🤖 MITHRA: Carbs provide energy; sources include rice, bread, fruits, and vegetables.",
  "what are fats": "🤖 MITHRA: Fats store energy and protect organs; healthy fats are in nuts, fish, and olive oil.",
  "what are vitamins": "🤖 MITHRA: Vitamins are essential nutrients that help the body function properly.",
  "what are minerals": "🤖 MITHRA: Minerals like calcium, iron, and zinc support bones, blood, and immunity.",
  "importance of water": "🤖 MITHRA: Water is vital for hydration, digestion, temperature regulation, and health.",

  // Dental & Oral Health
  "toothache": "🤖 MITHRA: For toothache, rinse your mouth with warm salt water and consult a dentist if pain persists.",
  "cavity": "🤖 MITHRA: Cavities are caused by tooth decay. Brush, floss, and visit your dentist regularly.",
  "gum bleeding": "🤖 MITHRA: Bleeding gums may indicate gum disease. Maintain oral hygiene and see a dentist.",
  "bad breath": "🤖 MITHRA: Brush, floss, and clean your tongue. Persistent bad breath should be checked by a dentist.",
  "oral hygiene": "🤖 MITHRA: Brush twice daily, floss once, and use mouthwash to maintain oral health.",
  "wisdom tooth pain": "🤖 MITHRA: Pain may be due to impaction. Consult a dentist for evaluation and treatment.",
  "braces care": "🤖 MITHRA: Brush after every meal, avoid sticky foods, and visit your orthodontist regularly.",
  "teeth whitening": "🤖 MITHRA: Use dentist-recommended products and avoid harsh chemicals on teeth.",
  "sensitive teeth": "🤖 MITHRA: Use a desensitizing toothpaste and avoid extremely hot or cold foods.",
  "oral infections": "🤖 MITHRA: Rinse with antiseptic solutions and see a dentist for proper treatment.",

  // Skin & Hair Care
  "acne": "🤖 MITHRA: Wash your face gently, avoid touching pimples, and use dermatologist-recommended products.",
  "dry skin": "🤖 MITHRA: Moisturize daily and drink plenty of water.",
  "oily skin": "🤖 MITHRA: Cleanse gently twice a day and avoid heavy creams.",
  "hair fall": "🤖 MITHRA: Eat a balanced diet, avoid stress, and use mild shampoos.",
  "dandruff": "🤖 MITHRA: Use anti-dandruff shampoos and maintain scalp hygiene.",
  "eczema": "🤖 MITHRA: Moisturize, avoid triggers, and consult a dermatologist.",
  "psoriasis": "🤖 MITHRA: Use medicated creams, avoid stress, and consult a dermatologist.",
  "sunburn": "🤖 MITHRA: Apply aloe vera, stay hydrated, and avoid sun exposure until healed.",
  "skin rash": "🤖 MITHRA: Avoid irritants, apply soothing creams, and seek medical advice if severe.",
  "hair care": "🤖 MITHRA: Wash hair regularly, avoid excessive heat, and use natural oils for nourishment.",

  // Yoga, Meditation, Fitness
  "yoga": "🤖 MITHRA: Yoga improves flexibility, reduces stress, and enhances overall well-being.",
  "meditation": "🤖 MITHRA: Meditate daily for mental clarity and stress reduction.",
  "pilates": "🤖 MITHRA: Pilates strengthens core muscles and improves posture.",
  "cardio exercise": "🤖 MITHRA: Cardio activities like running or cycling improve heart health.",
  "strength training": "🤖 MITHRA: Use weights or body resistance to build muscle and bone strength.",
  "stretching": "🤖 MITHRA: Stretching before and after exercise prevents injuries and improves flexibility.",
  "breathing exercises": "🤖 MITHRA: Practice deep breathing to reduce stress and increase lung capacity.",
  "morning workout": "🤖 MITHRA: Morning workouts boost energy and metabolism.",
  "evening workout": "🤖 MITHRA: Evening workouts help relieve stress and improve sleep quality.",
  "home exercises": "🤖 MITHRA: Simple bodyweight exercises like squats, pushups, and planks maintain fitness at home.",

  // Nutrition by Food Groups
  "fruits": "🤖 MITHRA: Eat a variety of fruits daily for vitamins, minerals, and antioxidants.",
  "vegetables": "🤖 MITHRA: Include leafy greens and colorful vegetables for essential nutrients.",
  "protein": "🤖 MITHRA: Consume lean meats, beans, and legumes for muscle repair and growth.",
  "carbohydrates": "🤖 MITHRA: Include whole grains for energy and fiber.",
  "fats": "🤖 MITHRA: Choose healthy fats from nuts, seeds, and olive oil.",
  "vitamins": "🤖 MITHRA: Vitamins support immune system, skin health, and energy production.",
  "minerals": "🤖 MITHRA: Minerals like calcium and iron are essential for bones and blood health.",
  "hydration tips": "🤖 MITHRA: Drink at least 8 glasses of water daily to stay hydrated.",
  "balanced diet": "🤖 MITHRA: Combine carbohydrates, protein, healthy fats, and fiber for optimal health.",
  "snacking": "🤖 MITHRA: Choose healthy snacks like fruits, nuts, or yogurt instead of sugary foods.",

  // Infant & Child Care
  "baby feeding": "🤖 MITHRA: Breastfeed exclusively for 6 months, then introduce solid foods gradually.",
  "child vaccinations": "🤖 MITHRA: Follow the recommended vaccination schedule for immunity.",
  "child nutrition": "🤖 MITHRA: Provide balanced meals with protein, vitamins, and minerals.",
  "child sleep": "🤖 MITHRA: Children need 9–12 hours of sleep depending on age.",
  "child exercise": "🤖 MITHRA: Encourage active play and outdoor activities daily.",
  "teething": "🤖 MITHRA: Soothe gums with teething rings and consult a pediatrician if needed.",
  "child fever": "🤖 MITHRA: Monitor temperature, keep hydrated, and consult a doctor if high.",
  "child allergies": "🤖 MITHRA: Identify triggers, avoid allergens, and seek medical advice.",
  "child hygiene": "🤖 MITHRA: Teach handwashing, dental care, and personal cleanliness.",
  "child mental health": "🤖 MITHRA: Provide attention, listen, and encourage social interaction.",

  // Geriatric (Elderly) Care
  "arthritis": "🤖 MITHRA: Exercise gently, maintain weight, and follow medication as prescribed.",
  "osteoporosis": "🤖 MITHRA: Consume calcium and vitamin D, and perform weight-bearing exercises.",
  "dementia": "🤖 MITHRA: Keep mentally active, socialize, and consult a doctor for memory issues.",
  "elderly nutrition": "🤖 MITHRA: Include protein, fiber, and micronutrients to maintain strength.",
  "elderly hydration": "🤖 MITHRA: Drink water regularly; dehydration can cause confusion.",
  "fall prevention": "🤖 MITHRA: Ensure safe home environment, remove obstacles, and use support devices.",
  "elderly exercise": "🤖 MITHRA: Low-impact exercises like walking, swimming, or yoga improve mobility.",
  "hearing care": "🤖 MITHRA: Check hearing regularly and use hearing aids if needed.",
  "vision care": "🤖 MITHRA: Regular eye checkups and proper lighting reduce eye strain.",
  "sleep in elderly": "🤖 MITHRA: Maintain a consistent sleep schedule and avoid stimulants before bedtime.",

  // Mental Health Therapies
  "anxiety": "🤖 MITHRA: Practice deep breathing, mindfulness, and consult a mental health professional.",
  "depression": "🤖 MITHRA: Engage socially, exercise, and seek professional counseling.",
  "stress management": "🤖 MITHRA: Use relaxation techniques, time management, and therapy if needed.",
  "cognitive behavioral therapy": "🤖 MITHRA: CBT helps identify negative thought patterns and develop coping strategies.",
  "mindfulness meditation": "🤖 MITHRA: Focus on the present moment to reduce anxiety and improve well-being.",
  "sleep hygiene": "🤖 MITHRA: Maintain regular sleep routine, limit screen time, and create a calm environment.",
  "anger management": "🤖 MITHRA: Practice relaxation, cognitive reframing, and counseling when necessary.",
  "social isolation": "🤖 MITHRA: Connect with friends, family, or community programs for emotional support.",
  "self care": "🤖 MITHRA: Engage in hobbies, exercise, rest, and maintain personal boundaries.",
  "emotional resilience": "🤖 MITHRA: Develop coping skills, social support, and positive thinking.",

  // First Aid & Emergency Basics
  "burn": "🤖 MITHRA: Cool the burn with running water, cover with a clean cloth, and seek medical care if severe.",
  "cut": "🤖 MITHRA: Clean with water, apply antiseptic, and bandage. Seek help if deep.",
  "choking": "🤖 MITHRA: Perform the Heimlich maneuver and call emergency services if needed.",
  "nosebleed": "🤖 MITHRA: Sit upright, pinch nose, and lean forward. Seek medical help if persistent.",
  "fracture": "🤖 MITHRA: Immobilize, apply ice, and get medical attention.",
  "poisoning emergency": "🤖 MITHRA: Call local poison control and follow instructions immediately.",
  "shock": "🤖 MITHRA: Lay the person down, keep warm, and seek emergency help.",
  "allergic reaction": "🤖 MITHRA: Use antihistamines or epinephrine if prescribed and call emergency services for severe reactions.",
  "stroke": "🤖 MITHRA: Call emergency services immediately if sudden weakness, slurred speech, or facial droop occurs.",
  "heart attack": "🤖 MITHRA: Call emergency services, keep calm, and chew aspirin if recommended.",

  // Medical Tests & Diagnostics
  "blood test": "🤖 MITHRA: Blood tests can detect infections, anemia, and organ function.",
  "urine test": "🤖 MITHRA: Checks kidney function, infections, and metabolic disorders.",
  "x-ray": "🤖 MITHRA: Imaging to assess bones, chest, or other internal structures.",
  "mri": "🤖 MITHRA: MRI scans provide detailed images of organs and tissues.",
  "ct scan": "🤖 MITHRA: CT scans detect abnormalities in internal organs.",
  "blood sugar test": "🤖 MITHRA: Monitor glucose levels to manage diabetes.",
  "cholesterol test": "🤖 MITHRA: Measures lipid profile to assess heart disease risk.",
  "pregnancy test": "🤖 MITHRA: Detects pregnancy through hormone levels.",
  "allergy test": "🤖 MITHRA: Determines allergic reactions to substances.",
  "covid test": "🤖 MITHRA: PCR or rapid antigen tests confirm COVID-19 infection.",

  // Additional entries
  "wrinkles": "🤖 MITHRA: Use sunscreen, moisturize regularly, and maintain a healthy diet to reduce wrinkles.",
  "eczema flare": "🤖 MITHRA: Avoid triggers, moisturize, and consult a dermatologist for flare management.",
  "psoriasis care": "🤖 MITHRA: Follow medicated creams, stress management, and regular dermatologist checkups.",
  "sun protection": "🤖 MITHRA: Apply sunscreen, wear protective clothing, and avoid direct sunlight during peak hours.",
  "allergic rash": "🤖 MITHRA: Avoid allergens, apply soothing creams, and consult a doctor if severe.",
  "acne scars": "🤖 MITHRA: Use dermatologist-recommended treatments like retinoids or laser therapy.",
  "skin hydration": "🤖 MITHRA: Drink water, use moisturizers, and avoid harsh soaps.",
  "pimples": "🤖 MITHRA: Avoid squeezing, keep the skin clean, and use topical treatments.",
  "blackheads": "🤖 MITHRA: Cleanse, exfoliate gently, and avoid heavy makeup.",
  "dry lips": "🤖 MITHRA: Apply lip balm, hydrate, and avoid licking lips frequently.",

  // Hair Care
  "hair growth": "🤖 MITHRA: Eat protein-rich foods, massage scalp, and avoid harsh chemicals.",
  "split ends": "🤖 MITHRA: Trim regularly and use nourishing hair oils.",
  "gray hair": "🤖 MITHRA: Nutrition and antioxidants can slow graying; hair dye is cosmetic.",
  "alopecia": "🤖 MITHRA: Consult a dermatologist for diagnosis and treatment options.",
  "hair dandruff": "🤖 MITHRA: Use anti-dandruff shampoos, maintain scalp hygiene, and manage stress.",
  "oily scalp": "🤖 MITHRA: Wash regularly, avoid heavy products, and maintain a balanced diet.",
  "dry scalp": "🤖 MITHRA: Use moisturizing shampoos and oils to prevent flaking.",
  "hair styling damage": "🤖 MITHRA: Limit heat styling, avoid tight hairstyles, and use protective products.",
  "hair loss causes": "🤖 MITHRA: Stress, hormones, diet, and genetics can contribute to hair loss.",
  "healthy hair tips": "🤖 MITHRA: Balanced diet, hydration, gentle washing, and regular trims maintain healthy hair.",

  // Digestive Health
  "acid reflux": "🤖 MITHRA: Avoid spicy foods, eat smaller meals, and consult a doctor if frequent.",
  "indigestion": "🤖 MITHRA: Eat slowly, avoid overeating, and drink plenty of water.",
  "constipation remedies": "🤖 MITHRA: Increase fiber intake, hydrate, and exercise regularly.",
  "diarrhea remedies": "🤖 MITHRA: Hydrate, eat light foods, and consult a doctor if persistent.",
  "stomach ulcer": "🤖 MITHRA: Avoid NSAIDs, manage stress, and consult a gastroenterologist.",
  "gas problems": "🤖 MITHRA: Avoid carbonated drinks, eat slowly, and include fiber in diet.",
  "irritable bowel": "🤖 MITHRA: Manage stress, monitor trigger foods, and follow medical advice.",
  "liver health tips": "🤖 MITHRA: Limit alcohol, eat balanced meals, and exercise regularly.",
  "kidney health tips": "🤖 MITHRA: Stay hydrated, reduce salt, and get regular checkups.",
  "digestive enzymes": "🤖 MITHRA: Help break down food; consult a doctor before supplementation.",

  // Cardiovascular & Metabolic Health
  "high blood pressure": "🤖 MITHRA: Reduce salt, exercise, and monitor blood pressure regularly.",
  "low blood pressure": "🤖 MITHRA: Stay hydrated, eat small frequent meals, and avoid sudden posture changes.",
  "cholesterol management": "🤖 MITHRA: Eat healthy fats, reduce processed foods, and exercise regularly.",
  "heart attack symptoms": "🤖 MITHRA: Chest pain, shortness of breath, and nausea require immediate medical attention.",
  "stroke symptoms": "🤖 MITHRA: Sudden weakness, slurred speech, or facial droop need emergency care.",
  "diabetes management": "🤖 MITHRA: Monitor blood sugar, eat balanced meals, and follow prescribed medications.",
  "obesity management": "🤖 MITHRA: Combine diet, exercise, and behavioral changes to maintain healthy weight.",
  "metabolic syndrome": "🤖 MITHRA: Manage blood sugar, cholesterol, and blood pressure with lifestyle changes.",
  "heart health tips": "🤖 MITHRA: Exercise, eat balanced meals, avoid smoking, and get regular checkups.",
  "circulation problems": "🤖 MITHRA: Exercise, avoid prolonged sitting, and consult a doctor if persistent.",

  // Respiratory Health
  "asthma": "🤖 MITHRA: Avoid triggers, use inhalers as prescribed, and monitor symptoms.",
  "allergic rhinitis": "🤖 MITHRA: Avoid allergens, use antihistamines, and consult a doctor if severe.",
  "bronchitis": "🤖 MITHRA: Rest, hydrate, and consult a doctor if symptoms persist.",
  "pneumonia": "🤖 MITHRA: Seek immediate medical care; maintain hydration and rest.",
  "cough remedies": "🤖 MITHRA: Stay hydrated, use honey or lozenges, and consult a doctor if persistent.",
  "shortness of breath": "🤖 MITHRA: Seek immediate medical attention if severe or sudden.",
  "lung health tips": "🤖 MITHRA: Avoid smoking, exercise regularly, and maintain air quality.",
  "COPD": "🤖 MITHRA: Follow medical advice, avoid smoking, and use prescribed inhalers.",
  "respiratory infection": "🤖 MITHRA: Rest, hydrate, and seek medical attention if severe or prolonged.",
  "sleep apnea": "🤖 MITHRA: Use CPAP devices if prescribed, sleep on the side, and maintain healthy weight.",

  // Women's Health & Pregnancy
  "menstrual cramps": "🤖 MITHRA: Use heat pads, mild painkillers, and exercise to relieve cramps.",
  "PMS": "🤖 MITHRA: Maintain balanced diet, exercise, and track symptoms for management.",
  "pregnancy nutrition": "🤖 MITHRA: Eat protein, iron, calcium, and stay hydrated for healthy pregnancy.",
  "morning sickness": "🤖 MITHRA: Eat small meals, stay hydrated, and consult a doctor if severe.",
  "labor signs": "🤖 MITHRA: Regular contractions, water breaking, and back pain indicate labor.",
  "postpartum care": "🤖 MITHRA: Rest, maintain nutrition, and monitor for postpartum depression.",
  "breastfeeding tips": "🤖 MITHRA: Nurse on demand, stay hydrated, and maintain healthy diet.",
  "menopause": "🤖 MITHRA: Manage symptoms with diet, exercise, and consult a doctor for hormone therapy.",
  "ovarian health": "🤖 MITHRA: Regular checkups, balanced diet, and awareness of symptoms help maintain health.",
  "reproductive health": "🤖 MITHRA: Regular screenings, hygiene, and safe practices are essential.",

  // Men's Health
  "prostate check": "🤖 MITHRA: Regular screenings after 50, maintain healthy diet, and exercise.",
  "erectile dysfunction": "🤖 MITHRA: Consult a doctor; lifestyle changes and medications can help.",
  "testosterone levels": "🤖 MITHRA: Exercise, balanced diet, and sleep maintain healthy hormone levels.",
  "male fertility": "🤖 MITHRA: Avoid smoking, maintain healthy weight, and consult a doctor for concerns.",
  "sexual health tips": "🤖 MITHRA: Practice safe sex, regular checkups, and awareness of STDs.",
  "male hygiene": "🤖 MITHRA: Daily cleaning, proper grooming, and wearing breathable clothing.",
  "hair loss in men": "🤖 MITHRA: Genetics, stress, and nutrition affect hair loss; consult a dermatologist.",
  "prostate health tips": "🤖 MITHRA: Exercise, healthy diet, and regular checkups maintain prostate health.",
  "urinary health men": "🤖 MITHRA: Stay hydrated, maintain hygiene, and consult a doctor for frequent issues.",
  "men's mental health": "🤖 MITHRA: Stress management, social support, and counseling improve mental well-being.",

  // Children & Adolescent Health
  "child growth tips": "🤖 MITHRA: Balanced diet, physical activity, adequate sleep, monitor milestones, pediatric checkups.",
  "child immunization schedule": "🤖 MITHRA: Follow national guidelines for vaccines, maintain records, consult pediatrician.",
  "common child illnesses": "🤖 MITHRA: Cold, flu, chickenpox, measles, ear infections, gastrointestinal issues.",
  "childhood nutrition": "🤖 MITHRA: Include fruits, vegetables, protein, dairy, whole grains, limit sugary foods.",
  "mental health in teens": "🤖 MITHRA: Encourage communication, social engagement, hobbies, monitor stress and anxiety.",
  "physical activity for children": "🤖 MITHRA: 60 min/day of moderate to vigorous activity, outdoor play encouraged.",
  "sleep for adolescents": "🤖 MITHRA: 8–10 hours per night, consistent schedule, reduce screens before bed.",
  "screen time guidelines": "🤖 MITHRA: Limit recreational screen time, encourage educational and physical activities.",
  "child safety tips": "🤖 MITHRA: Supervision, safe play areas, helmets/seatbelts, emergency preparedness.",
  "oral care children": "🤖 MITHRA: Brush twice daily, floss, limit sugary foods, regular dental checkups.",

  // Elderly Health
  "senior nutrition": "🤖 MITHRA: Protein, calcium, vitamin D, fiber, hydration; avoid malnutrition.",
  "fall prevention seniors": "🤖 MITHRA: Safe home, exercise, supportive footwear, regular health checkups.",
  "dementia signs": "🤖 MITHRA: Memory loss, confusion, personality changes; early diagnosis and care planning.",
  "osteoporosis elderly": "🤖 MITHRA: Adequate calcium/vitamin D, exercise, fall prevention, medications if prescribed.",
  "elderly mental health": "🤖 MITHRA: Social engagement, hobbies, therapy if needed, monitor depression/anxiety.",
  "mobility aids tips": "🤖 MITHRA: Use walkers/canes correctly, consult physiotherapist, maintain strength.",
  "medication management seniors": "🤖 MITHRA: Keep a schedule, avoid polypharmacy, consult doctor for side effects.",
  "vision care elderly": "🤖 MITHRA: Regular eye exams, corrective lenses, monitor for glaucoma/cataract.",
  "hearing care tips": "🤖 MITHRA: Regular hearing tests, use hearing aids if prescribed, protect from loud noise.",
  "hydration elderly": "🤖 MITHRA: Drink enough water, monitor urine color, include hydrating foods."
};


// Suggestions dropdown
let suggestionBox = document.createElement("div");
suggestionBox.id = "suggestion-box";
suggestionBox.style.position = "absolute";
suggestionBox.style.background = "#000";
suggestionBox.style.border = "1px solid #ffeb3b";
suggestionBox.style.borderRadius = "8px";
suggestionBox.style.width = userInput.offsetWidth + "px";
suggestionBox.style.zIndex = 1000;
suggestionBox.style.display = "none";
document.body.appendChild(suggestionBox);

// Show suggestions based on input
userInput.addEventListener("input", () => {
  const value = userInput.value.toLowerCase().trim();
  suggestionBox.innerHTML = "";
  if (!value) {
    suggestionBox.style.display = "none";
    return;
  }

  const matches = Object.keys(healthFAQ).filter(key => key.includes(value));
  if (matches.length === 0) {
    suggestionBox.style.display = "none";
    return;
  }

  matches.forEach(match => {
    const div = document.createElement("div");
    div.innerText = match;
    div.style.padding = "8px";
    div.style.cursor = "pointer";
    div.style.color = "#ffeb3b";
    div.addEventListener("click", () => {
      userInput.value = match;
      suggestionBox.style.display = "none";
      sendMessage();
    });
    suggestionBox.appendChild(div);
  });

// Autocomplete suggestions
userInput.addEventListener("input", () => {
  const value = userInput.value.toLowerCase().trim();
  suggestionBox.innerHTML = "";
  if (!value) return suggestionBox.style.display = "none";

  const matches = Object.keys(healthFAQ).filter(k => k.includes(value));
  if (matches.length === 0) return suggestionBox.style.display = "none";

  matches.forEach(match => {
    const div = document.createElement("div");
    div.innerText = match;
    div.className = "suggestion";
    div.addEventListener("click", () => {
      userInput.value = match;
      suggestionBox.style.display = "none";
      sendMessage();
    });
    suggestionBox.appendChild(div);
  });

  suggestionBox.style.display = "block";
});

// Hide suggestions if clicked outside
document.addEventListener("click", e => {
  if (e.target !== userInput) suggestionBox.style.display = "none";
});

// AI fallback
async function getAIAnswer(question) {
  try {
    const res = await fetch("https://api-inference.huggingface.co/models/gpt2", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inputs: `You are MITHRA, a helpful health assistant. Answer the question: ${question}` })
    });
    const data = await res.json();
    if (data && data[0]?.generated_text) return data[0].generated_text;
    return "🤖 MITHRA: Sorry, I couldn't generate an answer.";
  } catch {
    return "🤖 MITHRA: AI server error, try again later.";
  }
}

// Get answer (FAQ first, AI fallback)
async function getAnswer(question) {
  const q = question.toLowerCase();
  for (let key in healthFAQ) {
    if (q.includes(key)) return healthFAQ[key];
  }
  return await getAIAnswer(q);
}

// Send message
async function sendMessage() {
  const userText = userInput.value.trim();
  if (!userText) return;

  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.innerText = userText;
  chatWindow.appendChild(userMsg);

  const botMsg = document.createElement("div");
  botMsg.className = "message bot";
  botMsg.innerText = "🤖 MITHRA: typing...";
  chatWindow.appendChild(botMsg);
  chatWindow.scrollTop = chatWindow.scrollHeight;

  const answer = await getAnswer(userText);
  botMsg.innerText = answer;
  chatWindow.scrollTop = chatWindow.scrollHeight;

  userInput.value = "";
  suggestionBox.style.display = "none";
}

// Event listeners
sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});
