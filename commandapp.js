import { Command } from 'commander';
import {hasAnimal, addAnimal} from './src/services/animalsUtil.js';

const program = new Command();

program
    .name('cat-utils')
    .description('cat related cli.')
    .version('0.0.1');

program.command('hascat')
    .description('Add a cat if none exists in a String.')
    .argument('<string>', 'string to check for cats')
    .option('-j, --justcat', 'just tell me if the string has a cat in it')
    .action((str, options) => {
        const cat = 'cat';
        const justCat = options.justcat ? true : false;
        const hasCat = hasAnimal(str, cat);
        const catAdded = addAnimal(str, cat);

        if(justCat && hasCat){
            console.log(`We found a cat!`)
            return true;
        };
        if(justCat && !hasCat){
            console.log(`No cat found. :(`);
            return false;
        }
        console.log(catAdded);
        return true;
    });

program.parse();