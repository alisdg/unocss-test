import {
    defineConfig,
    presetAttributify,
    presetUno,
} from 'unocss'



export default defineConfig({
    shortcuts: [
        ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ],
    presets: [
        presetUno(),
        presetAttributify({
            trueToNonValued: true
        }),
    ],
    safelist: 'm-auto bg-blue'.split(' '),
})
