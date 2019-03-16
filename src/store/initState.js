import fs from 'fs';

const bootstrapMD = fs.readFileSync(__dirname + '/bootstrap.txt', 'utf8');
export default {
  current: '',
  examples: {
    Bootstrap: bootstrapMD,
    React: ''
  }
}
