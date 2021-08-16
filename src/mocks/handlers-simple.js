import { rest } from 'msw';

export const handlers = [
    rest.get('/api/user/:id', (req, res, ctx) => { // Handler
        return res(
            ctx.status(200), // Status
            ctx.json({ // Response
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
    }),
];
