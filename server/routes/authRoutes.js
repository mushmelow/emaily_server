const passport= require('passport');

module.exports = (app) => {
    //create route handler for google auth
    app.get(
        '/auth/google', passport.authenticate('google',{
            scope: ['profile','email']
        })
    );
    //Create route handler for google redirection when user is authenticate
    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req,res) => {
           res.redirect('/surveys');
        }
    );

    //logout route
    app.get('/api/logout', (req,res)=>{
        req.logout();
        res.redirect('/');
    });

    //test cookies and auth
    app.get('/api/current_user', (req,res)=>{
        res.send(req.user);
    })
};
