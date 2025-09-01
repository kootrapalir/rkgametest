export const verses = [
  {
    id: 1,
    title: "नीलमणि तनु की महिमा",
    sanskrit: [
      "नीलमणि तनु लखि गइ बलिहार।",
      "त्रिभुवन सुन्दर कामदेव अरु, रति है उसकी नार।",
      "उनते अगनित गुनित मनोहर, हैं सुन्दर सरकार।"
    ],
    meaning: "The divine blue form of Lord Krishna is incomparably beautiful, surpassing even Kamadeva and Rati in beauty.",
    theme: "Divine body's incomparable beauty"
  },
  {
    id: 2,
    title: "नीले वर्ण की तुलना",
    sanskrit: [
      "अनुपम नीलो तनु सरकार।",
      "कोउ कह इन्द्रनील मणि सम कोउ, नील जलद अनुहार।",
      "कोउ कह नील कमल सम नीलो, तनु छवि नन्द कुमार।"
    ],
    meaning: "Krishna's blue form is compared to sapphire, blue clouds, and blue lotus.",
    theme: "Comparison of blue color with sapphire, clouds, and lotus"
  },
  {
    id: 3,
    title: "मुख की छवि",
    sanskrit: [
      "श्याम मुख छवि लखि गइ बलिहार।",
      "लखतहिं बनत सखी मुख छवि जब, हँसत श्याम सरकार।",
      "दाडिम बीज सरिस दशनन दुति, दमकनि श्वेत निहार।"
    ],
    meaning: "Krishna's beautiful face with radiant teeth like pomegranate seeds.",
    theme: "Facial beauty with teeth, lips, and divine glow"
  },
  {
    id: 4,
    title: "मुकुट की शोभा",
    sanskrit: [
      "श्याम सिर मुकुट लटक बलिहार।",
      "चिन्मय नाना मणिन अलंकृत, कनक मुकुट सिरधार।",
      "रंग बिरंगे मणिन रंग मिलि, झिलमिल करत लिलार।"
    ],
    meaning: "Krishna's crown adorned with various gems and pearls.",
    theme: "Crown adorned with gems, pearls, and peacock feather"
  },
  {
    id: 5,
    title: "नेत्रों की महिमा",
    sanskrit: [
      "नीलमणि नैनन पर बलिहार।",
      "तीन रंग श्वेतिमा अरुणिमा, अरु कालिमा निहार।",
      "डूब न जाय रसिक नैनन रस, याते पलक विहार।"
    ],
    meaning: "Krishna's eyes with three colors - white, red, and black.",
    theme: "Eyes with three colors and enchanting glances"
  },
  {
    id: 6,
    title: "चरण कमल",
    sanskrit: [
      "नीलमणि चरण कमल बलिहार।",
      "चिन्मय नीले पद पंकज पर, पीताम्बर छविदार।",
      "रतन जटित कनकन पग पायल, की रुन झुन झनकार।"
    ],
    meaning: "Krishna's lotus feet with divine marks and golden anklets.",
    theme: "Lotus feet with divine marks and anklets"
  }
];

export const getVerseById = (id) => {
  return verses.find(verse => verse.id === id);
};

export const getRandomVerse = () => {
  return verses[Math.floor(Math.random() * verses.length)];
};
