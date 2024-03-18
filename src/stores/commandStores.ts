// @ts-nocheck
import { map } from 'nanostores';

export const commandHistory = map({ commands: [], index: 0 })

export function addCommand(command: string) {
    const commands = commandHistory.get('commands').commands;
    console.log(commands)
    const { index } = commandHistory.get('index');
    
    commandHistory.setKey('commands', [...commands, command]);
    commandHistory.setKey('index', index + 1);
}

export function getPreviousCommand() {
    const { commands } = commandHistory.get('commands');
    const { index } = commandHistory.get('index');
    const previousCommandIndex = index - 1;
    
    commandHistory.setKey('index', previousCommandIndex);
    return commands.at(previousCommandIndex) ?? '';
}

export function getNextCommand() {
    const { commands } = commandHistory.get('commands');
    const { index }= commandHistory.get('index');
    console.log(index)
    const nextCommandIndex = index + 1;
    console.log(nextCommandIndex)
    
    commandHistory.setKey('index', nextCommandIndex);
    return commands.at(nextCommandIndex) ?? '';
}

export function getCommandHistory() {
    const commands = commandHistory.get('commands');
    return commands;
}
