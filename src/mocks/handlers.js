import { rest } from 'msw';

export const handlers = [
    rest.get('/api/user/:id', (req, res, ctx) => {
        const { id } = req.params;
        if (id === 'EMP000') {
            return res(
                ctx.status(200),
                ctx.delay(200),
                ctx.json({
                    status: 'error',
                    error: {
                        message: `Sorry, can't find user you are looking for.`,
                    },
                })
            );
        }
        if (id === 'EMP101') {
            return res(
                ctx.status(200),
                ctx.delay(200),
                ctx.json({
                    status: 'success',
                    data: {
                        company: 'Intuit',
                        name: 'Praveen Singh',
                        image: {
                            src: 'https://praveensingh.tech/static/praveen-1808da4651f59120131f2e4d2e48b53c.png',
                            alt: 'Praveen',
                        },
                        employeeId: 'EMP101',
                    },
                })
            );
        }
    }),
];
