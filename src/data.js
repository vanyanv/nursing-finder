const CHECKED = "Nov 10, 2026";
const SCHOOLS = [
{
  id:"csulb", area:"lb", status:"ready", name:"Cal State Long Beach", short:"CSULB", mono:"LB", color:"#1d1d1f",
  where:"Long Beach · Public (CSU)", checks:3, nclex:["98.8%", "169 tested"], rate:"13% (Fall 2025)", apply:[["Cal State Apply", "https://www.calstate.edu/apply"], ["Casper registration", "https://acuityinsights.app/casper/"], ["CSULB nursing application", "https://csulb.qualtrics.com/jfe/form/SV_1TbdvSGtxZK5Dhk"], ["CSULB transfer supplemental (opens Jan 4)", "https://www.csulb.edu/admissions/supplemental-application"]], compare:{"rows": [["Overall GPA minimum", "3.25", "3.9", true], ["Science prerequisite GPA minimum", "3.0", "4.0", true], ["Average science GPA of admits", "3.96 (Fall 2025) · 3.94 (Spring 2026)", "4.0", true], ["Average GE prerequisite GPA of admits", "3.97 (Fall 2025) · 3.96 (Spring 2026)", "not known", null], ["Admitted", "78 of 594 (Fall 2025) · 80 of 401 (Spring 2026)", "", null]], "verdict": "Her science GPA is right at the level of admitted students. Her grades in Statistics, English, Oral Communication and Critical Thinking count too, then Casper and the communication exercise decide it.", "src": "https://www.csulb.edu/college-of-health-human-services/school-of-nursing/undergraduate-bsn-faq"},
  lead:"The closest public BSN to LBCC. Very competitive: you're ranked on your prerequisite grades and a Casper test, then the top applicants do a communication exercise.",
  glance:{gpa:["3.25","3.0 in prereqs · admits average 3.96"],test:["Casper","no TEAS needed"],odds:["78 of 594","got in for Fall 2025"]},
  deadlines:[["2026-11-30","Apply to CSULB on Cal State Apply"],["2026-12-03","Casper test date"],["2027-01-16","Last Casper test date"],["2027-02-01","Nursing application, transfer supplemental, and all prerequisites done"]],
  prereqRule:"C or better in each, 3.0 average · sciences within 5 years · all finished by Feb 1, 2027, so Spring 2027 classes won't count",
  courses:[["Human Anatomy + lab","4 units · matches CSULB BIO 208"],["Human Physiology + lab","4 units · matches CSULB BIO 207"],["Microbiology + lab","4 units · matches CSULB BIO 201"],["Chemistry + lab","4–5 units · intro/prep chemistry not accepted"],["Statistics","must match CSULB STAT 108 or similar; other math won't count"],["Oral Communication","any GE communication course"],["English Composition","any GE composition course"],["Critical Thinking","any GE A3 course"]],
  steps:[
    {title:"Check your GPA", sub:"Only your first C-or-better attempt counts toward the prerequisite GPAs.", checks:[["Cumulative GPA 3.25 or higher",""],["Science prerequisite GPA 3.0 or higher",""],["GE prerequisite GPA 3.0 or higher",""]]},
    {title:"Apply to CSULB on Cal State Apply", sub:"Fall 2027 window closes Nov 30, 2026.", checks:[["Pick the major “Nursing BS” (not “Nursing BS - RN”)",""],["Submit by Nov 30, 2026","","https://www.calstate.edu/apply"],["Be on track for 60 transferable units, 2.0 GPA and the Golden Four (English, Critical Thinking, Oral Communication, Math) with C or better by spring 2027",""]]},
    {title:"Take the Casper test", sub:"An online situational judgment test, 90–110 minutes. Register at takecasper.com under “Nursing – Undergraduate” and choose CSULB.", checks:[["Book at least 3 days ahead (accommodations: 4 weeks ahead)",""],["Test on Dec 3, 2026 or Jan 16, 2027","Results must reach CSULB by Feb 1","https://acuityinsights.app/casper/"]]},
    {title:"Send the nursing applications", sub:"Both are separate from Cal State Apply.", checks:[["School of Nursing BSN application: Oct 1, 2026 – Feb 1, 2027","","https://csulb.qualtrics.com/jfe/form/SV_1TbdvSGtxZK5Dhk"],["CSULB Supplemental Application for transfers: Jan 4 – Feb 1, 2027","","https://www.csulb.edu/admissions/supplemental-application"]]},
    {title:"Communication exercise", sub:"The top 125 applicants are invited in late March or early April. Decisions come in late April.", checks:[["Watch your email in March",""]]},
    {title:"After you're accepted", sub:"About 5 semesters, 15–16 units each.", checks:[["Background check and drug screen",""],["CPR card, two-step TB test, titers, flu shot",""],["California driver's license and car insurance",""]]}
  ],
  notes:["LBCC counts as a local college for CSULB admission, but the School of Nursing says it ranks every applicant together with no priority. Ask whether local status helps for nursing.","CSULB doesn't check course matches for you. Confirm each LBCC class on assist.org (LBCC → CSULB) before relying on it."],
  extra:["No TEAS, CNA or volunteer hours required.","Spring 2028 is also possible: Cal State Apply Jul 1 – Aug 31, 2027 and nursing application Jul 1 – Sep 21, 2027.","Out-of-state applicants rarely get a spot."],
  contact:[["Email","nursing@csulb.edu"],["Phone","(562) 985-4463"]],
  sources:["https://www.csulb.edu/college-of-health-human-services/school-of-nursing/bsn-program","https://www.csulb.edu/college-of-health-human-services/school-of-nursing/undergraduate-bsn-faq","https://www.csulb.edu/admissions/supplemental-application","https://www.csulb.edu/admissions/transfer-admission-eligibility","https://www.csulb.edu/admissions/local-preference-admission-consideration"]
},
{
  id:"auhs", area:"lb", status:"ready", name:"American University of Health Sciences", short:"AUHS", mono:"AU", color:"#1f3f7a",
  where:"Signal Hill (inside Long Beach) · Private", checks:3, nclex:["91.0%", "100 tested"], rate:"Not published", apply:[["AUHS application", "https://www.auhs.edu/applying-for-auhs"], ["BSN admissions page", "https://www.auhs.edu/bsn-admissions"]], compare:{"rows": [["Overall GPA minimum", "2.5", "3.9", true], ["Science GPA minimum", "2.5", "4.0", true], ["Average GPA of admits", "Not published", "", null]], "verdict": "She is far above every minimum. AUHS doesn't publish admitted-student averages, so the TEAS and interview are what to prepare for.", "src": "https://www.auhs.edu/bsn-admissions"},
  lead:"A small private Christian health sciences university about 10 minutes from LBCC. Admission is rolling, first come first served, and you can apply while finishing your last one or two prerequisites.",
  glance:{gpa:["2.5","overall and in the 4 sciences"],test:["TEAS 7","65–70% + Wonderlic test"],odds:["Interview","rolling admission"]},
  deadlines:[["2027-02-15","Spring quarter start (3rd week of Feb)"],["2027-08-16","Fall quarter start (3rd week of Aug)"]],
  prereqRule:"C or better in each · sciences within 5 years · done by your start date (apply with 1–2 still in progress)",
  courses:[["General Chemistry + lab",""],["Anatomy + lab",""],["Physiology + lab",""],["Microbiology + lab",""],["College Algebra or Statistics",""],["College Composition",""],["Sociology",""],["General Psychology",""],["Critical Thinking",""]],
  steps:[
    {title:"Check your GPA", sub:"", checks:[["2.5 GPA across chemistry, anatomy, physiology and microbiology",""],["2.5 cumulative GPA on transferable classes",""]]},
    {title:"Pass two entrance tests", sub:"", checks:[["Wonderlic Scholastic Level Exam: 19 (computer) or 21 (paper)",""],["ATI TEAS 7 within 6 months of starting","Transfer section says 65%; another section says 70%"]]},
    {title:"Apply and interview", sub:"Start by contacting admissions.", checks:[["Meet an admissions representative",""],["Submit the application","","https://www.auhs.edu/applying-for-auhs"],["Formal interview",""],["Financial aid meeting",""]]},
    {title:"Start the program", sub:"New students start in Fall (3rd week of Aug) and Spring (3rd week of Feb). About 3 years of nursing classes.", checks:[["Attend orientation",""]]}
  ],
  notes:["The TEAS minimum is listed as 70% in one place and 65% in another. Ask admissions which applies to transfers.","Spring start is listed as the 3rd week of February, as March in the FAQ, and as Mar 29, 2027 in the catalog. Confirm the exact date.","Transfers are accepted for the Spring and Fall quarters once all 9 prerequisites are done."],
  extra:["No BSN tuition is posted. The school-wide estimate for full-time undergrads was $24,575 a year (2024–25).","The BSN is accredited by CCNE (2026–27 catalog).","About 3 to 3.5 years (12 quarters, 189 quarter units).","Health and background requirements aren't posted; expect them after acceptance."],
  contact:[["Email","admissions@auhs.edu"],["Phone","(562) 988-2278"]],
  sources:["https://www.auhs.edu/bsn-admissions","https://www.auhs.edu/dates-and-deadline","https://www.auhs.edu/bsn-faq","https://www.auhs.edu/wp-content/uploads/2026/09/AUHS.Catalog-2026-2027.pdf"]
},
{
  id:"calstatela", area:"la", status:"ready", name:"Cal State LA", short:"Cal State LA", mono:"LA", color:"#b8860b",
  where:"Los Angeles · Public (CSU)", checks:3, nclex:["96.1%", "103 tested"], rate:"≈ 10% (70 of ~700)", apply:[["Cal State Apply", "https://www.calstate.edu/apply"], ["NursingCAS", "https://nursingcas.liaisoncas.org/apply/"], ["TEAS info (Cal State LA)", "https://www.calstatela.edu/sites/default/files/teas_exam_information_2024.pdf"]], compare:{"rows": [["Overall and prerequisite GPA minimum", "3.25", "3.9", true], ["“Competitive” GPA", "3.60+", "3.9", true], ["TEAS (each section)", "70% minimum · 80%+ competitive", "not taken yet", null], ["Admitted", "about 70 of 700 each year", "", null], ["Average GPA of admits", "Not published", "", null]], "verdict": "She is above the GPA the school calls competitive. The TEAS (80%+ in every section) and B's on the first try in every prerequisite will matter most.", "src": "https://www.calstatela.edu/hhs/nursing/bsn-traditional-program"},
  lead:"A public BSN with strict grade rules: every prerequisite needs a B or better on the first try. About 70 students are admitted each year from roughly 700 applicants.",
  glance:{gpa:["3.25","overall and prereqs · 3.60+ competitive"],test:["TEAS","70%+ in all 4 sections"],odds:["≈ 70 of 700","admitted each year"]},
  deadlines:[["2026-11-30","Apply to Cal State LA on Cal State Apply"],["2027-01-15","NursingCAS application and all prerequisites done"],["2027-01-31","Official transcripts reach NursingCAS"]],
  prereqRule:"B or better on the first attempt (B- doesn't count, no retakes) · no expiration · done by Jan 15, 2027",
  courses:[["Human Anatomy + lab","4 units"],["Human Physiology + lab","4 units"],["Microbiology + lab","4 units"],["Chemistry + lab","4 units"],["English Composition","3 units"],["Statistics","3 units"],["Public Speaking / Oral Communication","3 units"],["Critical Thinking","3 units (GE A3)"]],
  steps:[
    {title:"Check your GPA", sub:"", checks:[["Cumulative GPA 3.25 or higher","3.60+ is competitive"],["Prerequisite GPA 3.25 or higher",""]]},
    {title:"Take the TEAS", sub:"Within two years of the deadline. Unlimited retakes.", checks:[["Score 70%+ in Reading, Math, Science and English","80%+ is competitive"],["Upload the Individual Performance Profile to NursingCAS",""]]},
    {title:"Apply to Cal State LA on Cal State Apply", sub:"", checks:[["Submit by Nov 30, 2026","","https://www.calstate.edu/apply"]]},
    {title:"Send the NursingCAS application", sub:"Open Oct 1, 2026 – Jan 15, 2027 (8:59 pm Pacific).", checks:[["Submit NursingCAS by Jan 15, 2027","","https://nursingcas.liaisoncas.org/apply/"],["Optional but recommended: 50–100 hours of healthcare work or volunteering in the last 2 years",""],["Official transcripts to NursingCAS by Jan 31, 2027",""]]},
    {title:"Hear back and start", sub:"Decisions come in March/April. Mandatory orientation in June. About 3 years.", checks:[["Background check and drug screen",""],["Plan to take Sociology, Nutrition and Psychology (required, not prerequisites)",""]]}
  ],
  notes:["LBCC is not on Cal State LA's local-preference college list, so she won't get the local boost.","The program page says Cal State Apply opens Aug 1; the transfer PDF says Oct 1. The Nov 30 deadline is the same on both."],
  extra:["Admission has two steps: the School of Nursing recommends, then university admissions makes the final call."],
  contact:[["Email","Schoolofnursing@calstatela.edu"],["Phone","(323) 343-4700"],["Pre-admission advising","(323) 343-3901"]],
  sources:["https://www.calstatela.edu/hhs/nursing/bsn-traditional-program","https://www.calstatela.edu/sites/default/files/TRANSFER%20APPLICANTS%202026_0.pdf","https://www.calstatela.edu/admissions/local-preference-transfers","https://www.calstatela.edu/hhs/nursing/contact-us"]
},
{
  id:"ucla", area:"la", status:"ready", name:"UCLA", short:"UCLA", mono:"UC", color:"#2774ae",
  where:"Los Angeles · Public (UC)", checks:3, nclex:["92.2%", "51 tested"], rate:"6.6% (Fall 2025)", apply:[["UC Application", "https://apply.universityofcalifornia.edu/"], ["UCLA Nursing supplemental", "https://apply.nursing.ucla.edu/"]], compare:{"rows": [["UC transfer GPA minimum", "3.2", "3.9", true], ["All admitted UCLA transfers (not just nursing)", "median 3.91 · middle half 3.77–4.00 (Fall 2025)", "3.9", true], ["Nursing transfers admitted", "20 of 304 (Fall 2025) · 21 of 307 (Fall 2024)", "", null], ["Average GPA of nursing admits", "Not published", "", null]], "verdict": "Her GPA matches a typical admitted UCLA transfer, but nursing takes only about 1 in 15 applicants, so the essay and experience list carry a lot of weight.", "src": "https://admission.ucla.edu/apply/transfer/transfer-profile/2025"},
  lead:"The hardest to get into: 20 of 304 nursing transfer applicants were admitted for Fall 2025. Transfers start as juniors in the fall and need a specific set of science classes done by spring.",
  glance:{gpa:["3.2","UC minimum · admits median 3.91"],test:["None","no TEAS or Casper"],odds:["20 of 304","nursing transfers, Fall 2025"]},
  deadlines:[["2026-11-30","UC application"],["2027-01-15","Nursing supplemental application"]],
  prereqRule:"All 7 courses (or LBCC equivalents) done by the end of Spring 2027 · plus 60 transferable units and full IGETC",
  courses:[["General Chemistry","UCLA Chem 20A"],["General & Inorganic Chemistry","UCLA Chem 20B"],["Organic Chemistry","UCLA Chem 30A"],["Cell & Molecular Biology","UCLA Life Sciences 7A"],["Physiology & Human Biology","UCLA Life Sciences 7C"],["Human Anatomy","UCLA Physiological Science 3"],["Human Physiology","UCLA Physiological Science 13"]],
  steps:[
    {title:"Meet the UC transfer basics", sub:"California community college students get top priority.", checks:[["UC transferable GPA 3.2 or higher","Admitted transfers' median was 3.91"],["60 transferable semester units by spring 2027",""],["Full IGETC general education at LBCC",""],["7-course pattern: 2 English, 1 math, 4 others",""]]},
    {title:"Submit the UC application", sub:"Oct 1 – Nov 30, 2026.", checks:[["Submit by Nov 30, 2026","","https://apply.universityofcalifornia.edu/"]]},
    {title:"Send the Nursing supplemental application", sub:"At apply.nursing.ucla.edu. Due Jan 15, 2027.", checks:[["Statement of purpose, 2–3 double-spaced pages","Upload in the Nursing supplemental application","https://apply.nursing.ucla.edu/"],["Work and volunteer experience list (résumé style)",""],["Two recommendations (teacher, counselor or professional)",""]]},
    {title:"Strongly recommended classes", sub:"Not required, but they help.", checks:[["Communication Studies 1 or 10 equivalent",""],["Math 3A or 31A equivalent",""],["Microbiology",""],["Intro Psychology",""]]}
  ],
  notes:["One UCLA page says the UC application is due Dec 1; three others say Nov 30. Submit by Nov 30.","The recommendation section shows a Jan 25 deadline while the rest of the supplemental says Jan 15. Aim for Jan 15.","The nursing page says full IGETC is required; the general transfer page says partial IGETC is accepted for some majors. Plan on full IGETC.","Check assist.org (LBCC → UCLA, Nursing) for the exact LBCC classes that match each course."],
  extra:["Fall start only.","UC fees for California residents: about $16,430 a year; about $36,700 total for commuters (2026–27)."],
  contact:[["Email","admissions@sonnet.ucla.edu"],["Phone","(310) 825-3109"]],
  sources:["https://nursing.ucla.edu/programs-admissions/academic-programs/bachelor-of-science","https://nursing.ucla.edu/programs-admissions/academic-programs/bachelor-of-science/apply","https://admission.ucla.edu/apply/transfer","https://admission.ucla.edu/apply/transfer/transfer-profile/2025","https://admission.ucla.edu/tuition-aid/tuition-fees"]
},
{
  id:"msmu", area:"la", status:"ready", name:"Mount Saint Mary's University", short:"Mount Saint Mary's", mono:"MS", color:"#3b5ba5",
  where:"Los Angeles · Private", checks:3, nclex:["84.1%", "201 tested"], rate:"Not published", apply:[["MSMU application (choose Nursing Transfer → BSN)", "https://admissions.msmu.edu/apply/"], ["BSN info session sign-up", "https://admissions.msmu.edu/portal/bsn-info-session"], ["Transfer credit preview", "https://transfers.msmu.edu/#/home"]], compare:{"rows": [["Overall GPA minimum", "3.0", "3.9", true], ["Science GPA minimum", "2.7", "4.0", true], ["Average GPA of admits", "Not published", "", null]], "verdict": "Well above both minimums. MSMU doesn't publish admitted-student numbers.", "src": "https://www.msmu.edu/admission--aid/nursing-admission/bsn-admission/"},
  lead:"A private university with a BSN built for transfer students. Fall start only, and you can apply with up to two classes still in progress.",
  glance:{gpa:["3.0","and 2.7 in sciences · no exceptions"],test:["By invite","entrance exam after deadline"],odds:["Interview","video interview by invite"]},
  deadlines:[["2027-02-01","BSN transfer application (11:59 pm Pacific)"]],
  prereqRule:"C or better · sciences within 5 years · up to 2 can be in progress when you apply (only 1 science)",
  courses:[["Chemistry or Physics","3 units"],["Human Anatomy + lab","4 units"],["Human Physiology + lab","4 units"],["Microbiology + lab","4 units"],["Intro to Psychology","3 units"],["Intro to Sociology or Cultural Anthropology","3 units"],["English 1A","3 units"],["English 1B","3 units"],["Intro to Communication","2–3 units"],["Quantitative Reasoning / Math","3 units"]],
  steps:[
    {title:"Check your GPA", sub:"", checks:[["Cumulative GPA 3.0 or higher",""],["Science GPA 2.7 or higher",""],["No more than one failed prerequisite (C- or lower)","A class can be retaken once, only if you got a C- or lower"]]},
    {title:"Apply as a Nursing Transfer", sub:"Application opened Sep 1 and is due Feb 1, 2027.", checks:[["Choose category “Nursing Transfer”, then “BSN”","","https://admissions.msmu.edu/apply/"],["Official transcripts from every college, sent directly",""],["Proof of enrollment for classes in progress",""],["One reference on official letterhead",""],["Essay, 2–3 double-spaced pages","Prompt: How will becoming a nurse help you make a difference in others' lives?"]]},
    {title:"Entrance exam and video interview", sub:"Strong applicants are invited after the Feb 1 deadline.", checks:[["Take the nursing entrance exam when invited",""],["Complete the video interview when invited",""]]}
  ],
  notes:["The entrance exam's name and passing score aren't posted. Ask admissions.","The page doesn't say which campus (Chalon in West LA or Doheny downtown) hosts the BSN."],
  extra:["Tuition 2026–27: $51,034 a year full-time, plus fees.","Transfer students are automatically considered for the Dean's Transfer Scholarship, renewable for three years."],
  contact:[["Email","nursingadmission@msmu.edu"],["Phone","(213) 477-2500"]],
  sources:["https://www.msmu.edu/admission--aid/nursing-admission/bsn-admission/","https://www.msmu.edu/admission--aid/nursing-admission/pre-nursing-major/"]
},
{
  id:"apu", area:"la", status:"ready", name:"Azusa Pacific University", short:"APU", mono:"AP", color:"#8c1d2c",
  where:"Azusa · Private Christian", checks:2, nclex:["82.2%", "482 tested"], rate:"Not published", apply:[["APU application portal", "https://engage.apu.edu/portal/app"]], compare:{"rows": [["Overall GPA minimum", "3.0", "3.9", true], ["Science average minimum", "2.7 (B-)", "4.0", true], ["Average GPA of admits", "Not published", "", null]], "verdict": "Well above both minimums. APU doesn't publish admitted-student numbers for the transfer route.", "src": "https://catalog.apu.edu/academics/college-nursing-health-sciences/school-nursing/baccalaureate-nursing-programs/upper-division-transfer/upper-division-bsn-transfer-programs/"},
  lead:"Has a “2+2” route made for community college transfers: finish about 48 units of prerequisites at LBCC, then do the nursing years at APU in a cohort that runs year-round.",
  glance:{gpa:["3.0","and B- (2.7) average in sciences"],test:["None","no entrance exam listed"],odds:["Interview","may be interviewed"]},
  deadlines:[],
  prereqRule:"At least 48 transferable units before you start · science average B- (2.7) or better",
  courses:[["Human Anatomy + lab","4 units"],["Human Physiology","4 units"],["Microbiology + lab","4 units"],["General, Organic & Biological Chemistry","4 units"],["Public Communication","3 units"],["Writing 1A and 1B",""],["General Psychology","3 units"],["Human Growth & Development","3 units"],["Fine Arts, Philosophy, History, Literature","3 units each"]],
  steps:[
    {title:"Check your GPA", sub:"", checks:[["Cumulative GPA 3.0 or higher",""],["Science prerequisites average B- (2.7) or higher",""]]},
    {title:"Apply through Graduate & Professional Admissions", sub:"", checks:[["Official transcripts from every college",""],["Two letters of recommendation",""],["One-page statement of your nursing goals",""],["Résumé covering the past three years",""],["Writing sample",""]]},
    {title:"Interview and start", sub:"The program director may interview you. Cohorts start in fall, spring or summer and run three semesters a year.", checks:[["Interview if asked",""],["After acceptance: physical, TB test, titers, Tdap, background check, CPR",""]]}
  ],
  notes:["Application deadlines for the 2+2 transfer route aren't posted on the pages we could read. Call admissions before planning around a date.","APU's Nov 15 BSN deadline is for the traditional program, which is designed for high school graduates."],
  extra:["APU's LVN-to-BSN 2+2 lists $835 per unit (72 nursing units). Ask whether the transfer 2+2 costs the same.","Nursing courses need 73% or higher to pass."],
  contact:[["Phone","(626) 815-5386"],["Student Services","(626) 815-2020"]],
  sources:["https://catalog.apu.edu/academics/college-nursing-health-sciences/school-nursing/baccalaureate-nursing-programs/upper-division-transfer/upper-division-bsn-transfer-programs/","https://www.apu.edu/programs/bsn/","https://www.apu.edu/programs/lvn-to-bsn/"]
},
{
  id:"biola", area:"la", status:"ready", name:"Biola University", short:"Biola", mono:"BI", color:"#b0282f",
  where:"La Mirada · Private Christian", checks:2, nclex:["90.5%", "63 tested"], rate:"Not published", apply:[["Biola application", "https://go.biola.edu/portal/apply_today"]], compare:{"rows": [["Transfer GPA minimum", "3.2", "3.9", true], ["Science GPA minimum", "2.5", "4.0", true], ["Average GPA of admits", "Not published", "", null]], "verdict": "Well above both minimums. Biola doesn't publish admitted-student numbers for nursing.", "src": "https://catalog.biola.edu/ssth/NURS-bs/"},
  lead:"A Christian university about 20 minutes from Long Beach. You first enroll at Biola, then apply to the clinical nursing program, which picks students each spring.",
  glance:{gpa:["3.2","transfers · 2.5 in sciences"],test:["TEAS","70 or higher"],odds:["Interview","faculty interview"]},
  deadlines:[],
  prereqRule:"C or better in each, but no more than one C in the sciences · labs must be in person",
  courses:[["Human Anatomy","Biola BIOS 254 · 4 units"],["Physiology","Biola BIOS 281 · 4 units"],["Microbiology","Biola BIOS 282 · 4 units"],["Intro to Chemistry","Biola CHEM 107 · waived if you place higher"],["Organic & Biochemistry + lab","Biola CHEM 120/121 · 4 units"],["English Composition","ENGL 100 or 112"],["Intro to Psychology","PSYC 200"],["Communication","3 units"],["Intro to Professional Nursing","NURS 112 at Biola · B or better"]],
  steps:[
    {title:"Check your GPA", sub:"", checks:[["Cumulative GPA 3.2 or higher from all colleges",""],["Science GPA 2.5 or higher",""],["No repeated science classes",""]]},
    {title:"Get admitted to Biola", sub:"Apply to Biola and choose Nursing (BS). You start in the Healthcare Management nursing-pathway major.", checks:[["Apply to Biola as a transfer","","https://go.biola.edu/portal/apply_today"]]},
    {title:"Apply to the clinical nursing program", sub:"A separate application to the Department of Nursing, with a fee. You can apply at most twice.", checks:[["At least 3 of the sciences done before review",""],["TEAS score 70 or higher",""],["References and a short biography",""],["Faculty interview",""]]}
  ],
  notes:["The nursing application deadline isn't posted on the pages we could read. Ask the Department of Nursing.","One section says a 3.0 GPA is enough for clinical consideration; others say 3.2. Plan on 3.2.","Current Biola students get priority for clinical spots."],
  extra:["Tuition 2026–27: $52,944 a year, plus a $400 nursing fee each semester.","All nursing students complete a Bible minor (about 30 credits).","Total time is about 4.5 years from the start of college."],
  contact:[["Phone","(562) 903-6000"],["Email","nursing.department@biola.edu"]],
  sources:["https://www.biola.edu/degrees/u/nursing-bs","https://catalog.biola.edu/ssth/NURS-bs/","https://www.biola.edu/financial-aid/tuition-costs/undergrad"]
},
{
  id:"pepperdine", area:"la", status:"partial", name:"Pepperdine University", short:"Pepperdine", mono:"PE", color:"#00205c",
  where:"Malibu / Calabasas · Private", checks:2, nclex:["New", "no graduates yet"], rate:"Not published", apply:[["Pepperdine application (choose BSN – 2-Year)", "https://admission.pepperdine.edu/apply/"]], compare:{"rows": [["All admitted Pepperdine transfers (not just nursing)", "middle half 3.63–3.86 (Fall 2026)", "3.9", true], ["Nursing GPA minimum", "Not published", "", null]], "verdict": "Her GPA is above the range of typical Pepperdine transfer admits. Nursing-specific numbers aren't published yet because the program is new.", "src": "https://admission.pepperdine.edu/apply/"},
  lead:"A new BSN (started 2025) with a 2-year transfer option. Transfers take their nursing years at the Calabasas campus. Pepperdine hasn't posted the full requirements yet.",
  glance:{gpa:["Not posted","admitted transfers: 3.63–3.86"],test:["Not posted",""],odds:["4 semesters","for transfers"]},
  deadlines:[["2027-01-15","Transfer admission deadline"]],
  prereqRule:"At least 60 college units completed, including the nursing prerequisites (list not posted yet)",
  courses:[],
  steps:[
    {title:"Get 60 units done", sub:"", checks:[["60 completed college units",""],["Finish the nursing prerequisites (ask Pepperdine for the list)",""]]},
    {title:"Apply as a transfer", sub:"Deadline Jan 15. Decisions around Apr 1.", checks:[["Application and official transcripts","Choose “BSN - 2-Year”","https://admission.pepperdine.edu/apply/"],["One academic recommendation",""],["Optional interview",""]]}
  ],
  notes:["The transfer deadline table doesn't show a year. Confirm Jan 15, 2027 applies to Fall 2027.","Prerequisites, GPA minimum and tuition aren't posted on the pages we could reach."],
  extra:["Starts in fall and spring."],
  contact:[["Phone","(310) 506-4000"]],
  sources:["https://healthscience.pepperdine.edu/bsn/","https://admission.pepperdine.edu/apply/"]
},
{
  id:"cdu", area:"la", status:"ready", name:"Charles R. Drew University", short:"CDU", mono:"CD", color:"#7a1f3d",
  where:"Los Angeles (Watts) · Private", checks:2, nclex:["65.7%", "35 tested"], rate:"Not published", apply:[["NursingCAS", "https://nursingcas.liaisoncas.org/apply/"], ["CDU apply page", "https://www.cdrewu.edu/apply/"]], compare:{"rows": [["Overall GPA minimum", "3.0", "3.9", true], ["Average GPA of admits", "Not published", "", null]], "verdict": "Well above the minimum. Note the low NCLEX pass rate (65.7% in 2024–25), which is worth asking the school about.", "src": "https://www.cdrewu.edu/academics/program/bachelor-of-science-in-nursing/pre-nursing-to-bsn-admission-requirements/"},
  lead:"A health sciences university in South LA. Its Pre-Nursing to BSN track takes first-time and transfer students; math and science prerequisites need a B or better.",
  glance:{gpa:["3.0","cumulative"],test:["TEAS","75% overall and each section"],odds:["NursingCAS","letter, résumé, statement"]},
  deadlines:[["2027-03-01","Application for summer start (May)"],["2027-07-01","Application for fall start (August)"]],
  prereqRule:"Math and sciences B or better, within 7 years · other courses C or better",
  courses:[["College Algebra","B or better"],["Intro / General Biology","B or better"],["General Chemistry + lab","B or better"],["Microbiology + lab","B or better"],["Human Anatomy + lab","B or better"],["Human Physiology + lab","B or better"],["English Composition",""],["English Critical Thinking",""],["Public Speaking",""],["Sociology",""],["Psychology",""],["Creative Arts",""],["Humanities I and II",""]],
  steps:[
    {title:"Check your GPA", sub:"Below 3.0 is reviewed case by case.", checks:[["Cumulative GPA 3.0 or higher",""]]},
    {title:"Take the TEAS", sub:"Within one year of moving into the BSN.", checks:[["75% overall and 75% in Reading, Math, Science and English",""]]},
    {title:"Apply on NursingCAS", sub:"", checks:[["One letter of recommendation",""],["Résumé",""],["Personal statement, at least one page",""],["Official college transcripts","","https://nursingcas.liaisoncas.org/apply/"]]}
  ],
  notes:["The page says “16 prerequisite courses” but lists 14. Ask which two are missing.","Deadlines are posted without a year; these dates assume 2027.","Even transfers with every prerequisite done appear to enter through Pre-Nursing first, then request a move into the BSN. Ask if she can skip ahead."],
  extra:["Two nursing prep courses (Nursing 418 and 419) must be taken at CDU with a B or better.","Tuition: $31,800 a year flat rate (year-round, 2023 figures). Accredited by CCNE.","People who already have a bachelor's degree can't apply to this BSN."],
  contact:[["Phone","(323) 563-4800"],["Enrollment specialist","jasmineverges@cdrewu.edu"]],
  sources:["https://www.cdrewu.edu/academics/program/bachelor-of-science-in-nursing/pre-nursing-to-bsn-admission-requirements/","https://www.cdrewu.edu/academics/program/bachelor-of-science-in-nursing/","https://www.cdrewu.edu/academics/program/bachelor-of-science-in-nursing/cost-of-attendance/"]
},
{
  id:"wcu", area:"la", status:"ready", name:"West Coast University", short:"WCU", mono:"WC", color:"#00558c",
  where:"North Hollywood · Private (for-profit)", checks:2, nclex:["90.0%", "3,070 tested (all campuses)"], rate:"Not published", apply:[["WCU application", "https://westcoastuniversity.edu/get-started/application-for-admission"]], compare:{"rows": [["GPA minimum", "Not published", "3.9", null], ["Average GPA of admits", "Not published", "", null]], "verdict": "WCU admits by seat availability rather than ranking, so her grades should not be the obstacle. Cost is the bigger question.", "src": "https://westcoastuniversity.edu/programs/bachelor-science-nursing/los-angeles"},
  lead:"A private nursing university with start dates all year and prerequisites built into the program. Fast to start, but much more expensive than a CSU.",
  glance:{gpa:["Not posted","transfer classes need C- or better"],test:["HESI 76","or TEAS 52 / SAT 835"],odds:["By seat","admitted as seats open"]},
  deadlines:[["2027-01-18","Next BSN start"]],
  prereqRule:"Transfer classes need C- or better (core courses C+) · sciences within 5 years",
  courses:[],
  steps:[
    {title:"Take an entrance exam", sub:"Scores are good for 3 years. Two tries, at least a week apart.", checks:[["HESI A2 composite 76+, or TEAS 52+, or SAT 835 / ACT 16",""]]},
    {title:"Apply and interview", sub:"", checks:[["Interview with an admissions advisor","","https://westcoastuniversity.edu/get-started/application-for-admission"],["Send LBCC transcripts for transfer credit (up to 90 credits accepted)",""],["Sign the enrollment agreement",""]]},
    {title:"After you're accepted", sub:"39 months, 8 semesters. You must be 18 before clinicals.", checks:[["Background check and drug screen",""],["Immunizations, AHA BLS card, health insurance",""]]}
  ],
  notes:["The exam minimums and tuition come from a summary of the program page, not a quote we could read in full. Confirm them with admissions.","Classes still in progress or a slow transcript review can push back your start date."],
  extra:["Tuition for students starting Fall 2026: about $129,792 for the program; estimated total about $167,928 with other costs.","Accredited by CCNE."],
  contact:[["Phone","(818) 299-5500"]],
  sources:["https://westcoastuniversity.edu/programs/bachelor-science-nursing/los-angeles","https://westcoastuniversity.edu/get-started/transferring-credits","https://westcoastuniversity.edu/get-started/requirements"]
},
{
  id:"chamberlain", area:"la", status:"ready", name:"Chamberlain University", short:"Chamberlain", mono:"CH", color:"#0b4f6c",
  where:"Irwindale · Private (for-profit)", checks:2, nclex:["79.8%", "109 tested"], rate:"Not published", apply:[["Chamberlain application", "https://community.chamberlain.edu/s/application?source=300728"]], compare:{"rows": [["GPA minimum", "Not published (reviewed with the entrance exam)", "3.9", null], ["Average GPA of admits", "Not published", "", null]], "verdict": "Chamberlain reviews GPA and the HESI A2 together without a published cutoff, so her grades should not be the obstacle.", "src": "https://www.chamberlain.edu/nursing-school/california/irwindale"},
  lead:"No prerequisites required to start, and you can finish in about 3 years. Admission looks at your GPA and an entrance exam together.",
  glance:{gpa:["Holistic","no minimum posted"],test:["HESI A2","or TEAS / SAT / ACT"],odds:["Interview","with enrollment rep"]},
  deadlines:[["2027-08-31","Next Irwindale campus start (Aug 31)"]],
  prereqRule:"No prerequisites required · LBCC credits can transfer in to shorten the program",
  courses:[],
  steps:[
    {title:"Take an entrance exam", sub:"HESI A2, TEAS, ACT or SAT scores are accepted for 5 years. No minimum score is posted.", checks:[["Send a past score or take the HESI A2 with Chamberlain",""]]},
    {title:"Talk to an enrollment representative", sub:"", checks:[["Schedule your interview","","https://community.chamberlain.edu/s/application?source=300728"],["Send LBCC transcripts for transfer credit",""]]},
    {title:"Before clinicals", sub:"", checks:[["Background check, fingerprints and drug screen",""]]}
  ],
  notes:["The campus page lists an Aug 31 start but no year; the Jan 4 date elsewhere is for online programs. Confirm the next Irwindale start.","Tuition is listed as $825 per credit for 126 credits (about $103,950 plus $7,750 books and fees) but the program is 122 credits. Ask for your own estimate."],
  extra:["Irwindale NCLEX pass rate: 90%. Accredited by CCNE.","Chamberlain Care Grant can save up to $4,000."],
  contact:[["Phone","(626) 709-3921"]],
  sources:["https://www.chamberlain.edu/nursing-school/california/irwindale","https://www.chamberlain.edu/admission-aid/admissions","https://www.chamberlain.edu/nursing-programs/bachelor-of-science-in-nursing"]
},
/* Not an option for an LBCC transfer without a bachelor's degree */
{id:"csun",area:"no",name:"Cal State Northridge",mono:"CN",color:"#a6192e",where:"Northridge · Public (CSU)",why:"Its only BSN for non-nurses requires a bachelor's degree, and LBCC isn't a partner school for its ADN-to-BSN program."},
{id:"csudh",area:"no",name:"Cal State Dominguez Hills",mono:"DH",color:"#8a1538",where:"Carson · Public (CSU)",why:"Only offers nursing to students who are already RNs or in a community college nursing program."},
{id:"angeles",area:"no",name:"Angeles University",mono:"AN",color:"#5b4a8b",where:"Los Angeles · Private",why:"Listed as a state-approved BSN, but its website blocked our research. Call the school directly if she's interested."}
];

