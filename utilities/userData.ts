import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

export default [
  {
    _id: new ObjectId("65a100000000000000000001"),
    firstName: "Liam",
    lastName: "Carter",
    username: "liam.carter",
    entries: [
      new ObjectId("65b200000000000000000001"),
      new ObjectId("65b200000000000000000002"),
    ],
  },
  {
    _id: new ObjectId("65a100000000000000000002"),
    firstName: "Emma",
    lastName: "Wilson",
    username: "emma.wilson",
    entries: [
      new ObjectId("65b200000000000000000003"),
      new ObjectId("65b200000000000000000004"),
      new ObjectId("65b200000000000000000005"),
    ],
  },
  {
    _id: new ObjectId("65a100000000000000000003"),
    firstName: "Noah",
    lastName: "Brooks",
    username: "noah.brooks",
    entries: [
      new ObjectId("65b200000000000000000006"),
      new ObjectId("65b200000000000000000007"),
    ],
  },
  {
    _id: new ObjectId("65a100000000000000000004"),
    firstName: "Olivia",
    lastName: "Perez",
    username: "olivia.perez",
    entries: [
      new ObjectId("65b200000000000000000008"),
      new ObjectId("65b200000000000000000009"),
      new ObjectId("65b200000000000000000010"),
    ],
  },
  {
    _id: new ObjectId("65a100000000000000000005"),
    firstName: "Ethan",
    lastName: "Nguyen",
    username: "ethan.nguyen",
    entries: [
      new ObjectId("65b200000000000000000011"),
      new ObjectId("65b200000000000000000012"),
    ],
  },
  {
    _id: new ObjectId("65a100000000000000000006"),
    firstName: "Sophia",
    lastName: "Miller",
    username: "sophia.miller",
    entries: [
      new ObjectId("65b200000000000000000013"),
      new ObjectId("65b200000000000000000014"),
      new ObjectId("65b200000000000000000015"),
    ],
  },
  {
    _id: new ObjectId("65a100000000000000000007"),
    firstName: "Daniel",
    lastName: "Harris",
    username: "daniel.harris",
    entries: [
      new ObjectId("65b200000000000000000016"),
      new ObjectId("65b200000000000000000017"),
    ],
  },
  {
    _id: new ObjectId("65a100000000000000000008"),
    firstName: "Ava",
    lastName: "Robinson",
    username: "ava.robinson",
    entries: [
      new ObjectId("65b200000000000000000018"),
      new ObjectId("65b200000000000000000019"),
      new ObjectId("65b200000000000000000020"),
    ],
  },
  {
    _id: new ObjectId("65a100000000000000000009"),
    firstName: "Michael",
    lastName: "Stone",
    username: "michael.stone",
    entries: [
      new ObjectId("65b200000000000000000021"),
      new ObjectId("65b200000000000000000022"),
    ],
  },
  {
    _id: new ObjectId("65a100000000000000000010"),
    firstName: "Isabella",
    lastName: "Lopez",
    username: "isabella.lopez",
    entries: [
      new ObjectId("65b200000000000000000023"),
      new ObjectId("65b200000000000000000024"),
      new ObjectId("65b200000000000000000025"),
    ],
  },
];
