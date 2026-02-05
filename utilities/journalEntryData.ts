import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

export default [
  {
    _id: new ObjectId("65b200000000000000000001"),
    authorId: new ObjectId("65a100000000000000000001"),
    content: "Had a productive day at work and finished my main tasks.",
    mood: "happy",
    moodValue: 8,
    createdAt: new Date("2025-01-05T10:20:00Z"),
    updatedAt: new Date("2025-01-05T10:20:00Z"),
  },
  {
    _id: new ObjectId("65b200000000000000000002"),
    authorId: new ObjectId("65a100000000000000000001"),
    content: "Felt a bit tired today but managed to stay focused.",
    mood: "neutral",
    moodValue: 5,
    createdAt: new Date("2025-01-08T19:40:00Z"),
    updatedAt: new Date("2025-01-08T19:40:00Z"),
  },

  {
    _id: new ObjectId("65b200000000000000000003"),
    authorId: new ObjectId("65a100000000000000000002"),
    content: "Went for a long walk and cleared my mind.",
    mood: "happy",
    moodValue: 7,
  },
  {
    _id: new ObjectId("65b200000000000000000004"),
    authorId: new ObjectId("65a100000000000000000002"),
    content: "Work was stressful today. Too many meetings.",
    mood: "sad",
    moodValue: 3,
  },
  {
    _id: new ObjectId("65b200000000000000000005"),
    authorId: new ObjectId("65a100000000000000000002"),
    content: "Relaxed in the evening with a good book.",
    mood: "happy",
    moodValue: 8,
  },

  {
    _id: new ObjectId("65b200000000000000000006"),
    authorId: new ObjectId("65a100000000000000000003"),
    content: "Struggled with motivation today.",
    mood: "sad",
    moodValue: 2,
  },
  {
    _id: new ObjectId("65b200000000000000000007"),
    authorId: new ObjectId("65a100000000000000000003"),
    content: "Things felt more balanced after talking with a friend.",
    mood: "happy",
    moodValue: 6,
  },

  {
    _id: new ObjectId("65b200000000000000000008"),
    authorId: new ObjectId("65a100000000000000000004"),
    content: "Finished my project ahead of schedule!",
    mood: "happy",
    moodValue: 9,
  },
  {
    _id: new ObjectId("65b200000000000000000009"),
    authorId: new ObjectId("65a100000000000000000004"),
    content: "Feeling overwhelmed with responsibilities.",
    mood: "sad",
    moodValue: 4,
  },
  {
    _id: new ObjectId("65b200000000000000000010"),
    authorId: new ObjectId("65a100000000000000000004"),
    content: "Took some time to relax and recharge.",
    mood: "neutral",
    moodValue: 6,
  },

  {
    _id: new ObjectId("65b200000000000000000011"),
    authorId: new ObjectId("65a100000000000000000005"),
    content: "Great workout session today.",
    mood: "happy",
    moodValue: 8,
  },
  {
    _id: new ObjectId("65b200000000000000000012"),
    authorId: new ObjectId("65a100000000000000000005"),
    content: "Did not sleep well last night.",
    mood: "sad",
    moodValue: 3,
  },

  {
    _id: new ObjectId("65b200000000000000000013"),
    authorId: new ObjectId("65a100000000000000000006"),
    content: "Cooked a new recipe and loved it.",
    mood: "happy",
    moodValue: 7,
  },
  {
    _id: new ObjectId("65b200000000000000000014"),
    authorId: new ObjectId("65a100000000000000000006"),
    content: "Busy day, barely had time to rest.",
    mood: "neutral",
    moodValue: 5,
  },
  {
    _id: new ObjectId("65b200000000000000000015"),
    authorId: new ObjectId("65a100000000000000000006"),
    content: "Feeling grateful for my family.",
    mood: "happy",
    moodValue: 9,
  },

  {
    _id: new ObjectId("65b200000000000000000016"),
    authorId: new ObjectId("65a100000000000000000007"),
    content: "Missed a deadline today. Feeling disappointed.",
    mood: "sad",
    moodValue: 2,
  },
  {
    _id: new ObjectId("65b200000000000000000017"),
    authorId: new ObjectId("65a100000000000000000007"),
    content: "Started planning better for next week.",
    mood: "neutral",
    moodValue: 6,
  },

  {
    _id: new ObjectId("65b200000000000000000018"),
    authorId: new ObjectId("65a100000000000000000008"),
    content: "Had fun catching up with friends.",
    mood: "happy",
    moodValue: 8,
  },
  {
    _id: new ObjectId("65b200000000000000000019"),
    authorId: new ObjectId("65a100000000000000000008"),
    content: "Felt anxious in the morning.",
    mood: "sad",
    moodValue: 4,
  },
  {
    _id: new ObjectId("65b200000000000000000020"),
    authorId: new ObjectId("65a100000000000000000008"),
    content: "Meditation helped me feel calmer.",
    mood: "neutral",
    moodValue: 6,
  },

  {
    _id: new ObjectId("65b200000000000000000021"),
    authorId: new ObjectId("65a100000000000000000009"),
    content: "Productive meeting with the team.",
    mood: "happy",
    moodValue: 7,
  },
  {
    _id: new ObjectId("65b200000000000000000022"),
    authorId: new ObjectId("65a100000000000000000009"),
    content: "Long day, feeling exhausted.",
    mood: "neutral",
    moodValue: 5,
  },

  {
    _id: new ObjectId("65b200000000000000000023"),
    authorId: new ObjectId("65a100000000000000000010"),
    content: "Learned something new today.",
    mood: "happy",
    moodValue: 7,
  },
  {
    _id: new ObjectId("65b200000000000000000024"),
    authorId: new ObjectId("65a100000000000000000010"),
    content: "Feeling homesick lately.",
    mood: "sad",
    moodValue: 3,
  },
  {
    _id: new ObjectId("65b200000000000000000025"),
    authorId: new ObjectId("65a100000000000000000010"),
    content: "Looking forward to the weekend.",
    mood: "happy",
    moodValue: 8,
  },
];
