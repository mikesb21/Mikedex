import { ImageSourcePropType } from 'react-native';

const normal = require('./normal.png');
const fighting = require('./fighting.png');
const flying = require('./flying.png');
const poison = require('./poison.png');
const ground = require('./ground.png');
const rock = require('./rock.png');
const bug = require('./bug.png');
const ghost = require('./ghost.png');
const steel = require('./steel.png');
const fire = require('./fire.png');
const water = require('./water.png');
const grass = require('./grass.png');
const electric = require('./electric.png');
const psychich = require('./psychic.png');
const ice = require('./ice.png');
const dragon = require('./dragon.png');
const dark = require('./dark.png');
const fairy = require('./fairy.png');

type List = {
  [key in string]: ImageSourcePropType;
};

export const ObjectTypes: List = {
  normal,
  fighting,
  flying,
  poison,
  ground,
  rock,
  bug,
  ghost,
  steel,
  fire,
  water,
  grass,
  electric,
  psychich,
  ice,
  dragon,
  dark,
  fairy,
};

export default ObjectTypes;
