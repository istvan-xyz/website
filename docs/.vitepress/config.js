export default {
    title: "István's notes",
    themeConfig: {
        sidebar: [
            {
                text: 'Guides',
                items: [
                    { text: 'Adding SSH tunneling to a script', link: '/adding-ssh-tunneling-to-a-script' },
                    { text: 'Creating an encrypted Time Machine disk on ExFAT', link: '/time-machine-exfat' },
                    { text: 'Creating images for the Apple Watch', link: '/creating-images-for-the-apple-watch' },
                ],
            },
            {
                text: 'Thoughts',
                items: [
                    { text: 'Java weirdness', link: '/java-weirdness' },
                    { text: 'AngularJS', link: '/angularjs' },
                    { text: 'Boring tech', link: '/boring-tech' },
                    { text: 'The callback hell that never was', link: '/callback-hell-that-never-was' },
                ],
            },
            {
                text: 'Recommendations',
                items: [
                    { text: 'Making Architecture Matter - Martin Fowler Keynote', link: '/making-architecture-matter' },
                    {
                        text: 'Jonathan Blow on Software Quality at the CSUA GM2',
                        link: '/jonathan-blow-on-software-quality',
                    },
                ],
            },
        ],
    },
};
