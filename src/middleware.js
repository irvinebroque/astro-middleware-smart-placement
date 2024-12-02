export async function onRequest (context, next) {
    context.locals.title = "New title";
    return next();
};
