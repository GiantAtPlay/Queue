const _supressConsoleLogs = ()=> {
    beforeAll(() => {
        jest.spyOn(console, 'log').mockImplementation(() => {});
        jest.spyOn(console, 'error').mockImplementation(() => {});
        jest.spyOn(console, 'warn').mockImplementation(() => {});
        jest.spyOn(console, 'info').mockImplementation(() => {});
        jest.spyOn(console, 'debug').mockImplementation(() => {});
    });
}

export const supressConsoleLogs = _supressConsoleLogs

export default function setup(){
    _supressConsoleLogs()
}