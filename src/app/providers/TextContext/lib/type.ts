export type TextContextData = {
    header: {
        localTown: string,
        localStr: string,
        phone: string,
        menuArray: { name: string, path: string }[],
    },
    form: {
        title: string,
        subtitle: string,
    },
    welcomPage: {
        title: string,
        subtitle: string,
    },
    Asside: {
        title: string,
        qwestArray:
        {
            qwest: string,
            ans: string[],
        }[],

    },
    swiper: [
        {
            title: string,
            subtitle: string,
            img: string,
            price: string,
            subprice: string,
            list: string[]

        },
    ],

}