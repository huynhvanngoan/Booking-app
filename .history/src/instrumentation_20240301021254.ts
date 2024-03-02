export const register = async () => {
    if(process.env.NEXT_RUNTIME === 'nodejs') {
        const { Worker } = await import('bullmq')
    }
};
