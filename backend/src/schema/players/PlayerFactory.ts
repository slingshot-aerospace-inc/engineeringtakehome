import * as Faker from "faker";
import { define } from "typeorm-seeding";
import { PlayerEntity } from "./PlayerEntity";

define(PlayerEntity, () => {
  const player = new PlayerEntity();

  player.name = `${Faker.name.firstName(0)} ${Faker.name.lastName(0)}`;
  player.age = Faker.datatype.number(100);
  player.position = Faker.random.arrayElements(
    ["LW", "CT", "RW", "ST", "CF", "CAM"],
    Faker.datatype.number({ min: 1, max: 3 })
  );
  player.team = Faker.random.word();
  player.foot = Faker.random.arrayElement(["Left", "Right"]);
  player.rating = Faker.datatype.number(100);

  return player;
});