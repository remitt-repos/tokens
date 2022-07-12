import { Sync } from 'node-reposync';
console.log(new Sync(process.cwd()).doSync({}));
