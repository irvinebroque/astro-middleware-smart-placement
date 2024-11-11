export async function onRequest (context, next) {
    // intercept data from a request
    // optionally, modify the properties in `locals`
    context.locals.title = "New title";
    await new Promise(r => setTimeout(r, 4000));

    // return a Response or the result of calling `next()`
    return next();
};