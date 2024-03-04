const decForFn = fn => {
    const func = async (req, res, next) => {
        try {
            await fn(req, res, next)
        }
        catch (error) {
            next(error)
        }
    };

    return func
};

export default decForFn;  