//import dotenv from 'dotenv'
//dotenv.config()
const express = require('express');

const app = express();
app.use(express.json())

const bodyParser = require('body-parser');
app.use(bodyParser.json())

var cors = require('cors')
app.use(cors())



const port = process.env.PORT || 7000


const { AdminRouter } = require('./Routers/adminRouter');
app.use('/', AdminRouter)   // Load Routes

const { OwnerRouter } = require('./Routers/ownerRouter');
app.use('/', OwnerRouter)

const { UserRouter } = require('./Routers/userRouter');
app.use('/', UserRouter)

const { MoviesRouter } = require('./Routers/moviesRouter');
app.use('/', MoviesRouter)

const { BookingRouter } = require('./Routers/bookingRouter');
app.use('/', BookingRouter)

const { CancelRouter } = require('./Routers/cancelbookingRouter');
app.use('/', CancelRouter)

const { ScreensRouter } = require('./Routers/screensRouter')
app.use('/', ScreensRouter)

const { SeatsRouter } = require('./Routers/seatsRouter')
app.use('/', SeatsRouter)

const { ShowsRouter } = require('./Routers/showsRouter')
app.use('/', ShowsRouter)

const { TheaterRouter } = require('./Routers/theaterRouter')
app.use('/', TheaterRouter)

// app.get('/', (req, res) => {
//     res.send('We are at the root route of our server');
// });


const swaggerJSDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Node js api Project for BOOK_MY_SHOW',
            version: '1.0.0'
        },
        servers: [
            {
                url: 'http://localhost:7000'
            }
        ]

    },
    apis: [' ./index.js'],
}
const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


///////////   ADMIN    //////////
/**
 * @swagger
 * /viewadmin:
 *  get:
 *      summary: This api is used to check whether api is working or not in (admin table)
 *      description: This api is used to check whether api is working or not in (admin table)
 *      responses:
 *          200:
 *              description: To test Get method
 */

/**
 * @swagger
 * /viewadminById/{admin_id}:
 *  get:
 *      summary: This api is used to check whether api is working or not in (admin table)
 *      description: This api is used to check whether api is working or not in (admin table)
 *      responses:
 *          '200':
 *              description: To test Get method
 */

/**
 * @swagger
 *  components:
 *      schema:
 *         book_my_show:
 *                   type: object
 *                   properties:
 *                        Admin_id:
 *                                type: integer
 *                        Admin_name:
 *                                type: varchar
 *                        Password:
 *                                type: varchar
 *                        email:
 *                                type: varchar
 *                      
 */


/**
 * @swagger
 * /addadmin:
 *  post:
 *      summary: used to insert data into mysql database (admin table)
 *      description: This api is used to insert data into mysql database (admin table)
 *      requestBody:
 *          required: true,
 *          content: multipart/form-data
 *                   # application/json:
 *          schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *      '200':
 *        description: Added successfully.
 *      '400':
 *        description: The specified user ID is invalid (not a number).
 *      '404':
 *        description: A user with the specified ID was not found.
 *      default:
 *        description: Unexpected error
 */

/**
 * @swagger
 * /loginadmin:
 *  post:
 *      summary: used to insert data into mysql database (admin table)
 *      description: This api is used to insert data into mysql database (admin table)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *            description: Added successfully
 */


/**
 * @swagger
 * /updateadmin/{admin_id}:
 *  put:
 *      summary: used to update data into mysql database (admin table)
 *      description: This api is used to update data into mysql database (admin table)
 *      parameters:
 *          - in: path
 *            name: admin_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: updated successfully
 */


/**
 * @swagger
 * /deleteadmin/{admin_id}:
 *  delete:
 *      summary: This api is used to delete the record from (admin table)
 *      description: This api is used to delete the record from (admin table)
 *      parameters:
 *          - in: path
 *            name: admin_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: data is deleted successfully
 */



//////////     OWNER    /////////
/**
 * @swagger
 * /viewOwner:
 *  get:
 *      summary: This api is used to check whether api is working or not in (owner table)
 *      description: This api is used to check whether api is working or not in (owner table)
 *      responses:
 *          200:
 *              description: To test Get method
 */

/**
 * @swagger
* /viewOwnerById/{owner_id}:
*  get:
*      summary: This api is used to check whether api is working or not in (owner table)
*      description: This api is used to check whether api is working or not in (owner table)
 *      responses:
 *          200:
 *              description: To test Get method
 */



/**
 * @swagger
 *  components:
 *      schema:
 *         book_my_show:
 *                   type: object
 *                   properties:
 *                        owner_id:
 *                                type: integer
 *                        owner_name:
 *                                type: varchar
 *                        password:
 *                                type: varchar
 *                        email:
 *                                type: varchar
 *                        admin_id:
 *                                type: integer
 */


/**
 * @swagger
 * /addOwner:
 *  post:
 *      summary: used to insert data into mysql database (owner table)
 *      description: This api is used to insert data into mysql database (owner table)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: Added successfully
 */

/**
 * @swagger
 * /loginOwner:
 *  post:
 *      summary: used to insert data into mysql database (owner table)
 *      description: This api is used to insert data into mysql database (owner table)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: Added successfully
 */


/**
 * @swagger
 * /updateOwner/{owner_id}:
 *  put:
 *      summary: used to update data into mysql database (owner table)
 *      description: This api is used to update data into mysql database (owner table)
 *      parameters:
 *          - in: path
 *            name: owner_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: updated successfully
 */


/**
 * @swagger
 * /deleteOwner/{owner_id}:
 *  delete:
 *      summary: This api is used to delete the record from (owner table)
 *      description: This api is used to delete the record from (owner table)
 *      parameters:
 *          - in: path
 *            name: owner_id
 *            required: true 
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: data is deleted successfully
 */

//////   USER


/**
 * @swagger
 * /viewuser:
 *  get:
 *      summary: This api is used to check whether api is working or not in (user table)
 *      description: This api is used to check whether api is working or not in (user table)
 *      responses:
 *          200:
 *              description: To test Get method
 */

/**
 * 
 * /**
 * @swagger
  * /userById/{user_id}:
  *  get:
  *      summary: This api is used to check whether api is working or not in (user table)
 *      description: This api is used to check whether api is working or not in (user table)
 *      responses:
 *          200:
 *              description: To test Get method
 */

/**
/**
 * @swagger
 *  components:
 *      schema:
 *         book_my_show:
 *                   type: object
 *                   properties:
 *                        user_id:
 *                                type: integer
 *                        user_name:
 *                                type: varchar
 *                        mobile_no:
 *                                type: integer
 *                        email:
 *                                type: varchar
 *                        gender:
 *                                type: varchar
 *                        address:
 *                                type: varchar
 *                        password:
 *                                type: varchar
 *                        admin_id:
 *                                type: integer
 */


/**
 * @swagger
 * /adduser:
 *  post:
 *      summary: used to insert data into mysql database (user table)
 *      description: This api is used to insert data into mysql database (user table)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: Added successfully
 */


/**
 * @swagger
 * /loginuser:
 *  post:
 *      summary: used to insert data into mysql database (user table)
 *      description: This api is used to insert data into mysql database (user table)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: Added successfully
 */


/**
 * @swagger
 * /updateUser/{user_id}:
 *  put:
 *      summary: used to update data into mysql database (user table)
 *      description: This api is used to update data into mysql database (user table)
 *      parameters:
 *          - in: path
 *            name: user_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: updated successfully
 */


/**
 * @swagger
 * /deleteUser/{user_id}:
 *  delete:
 *      summary: This api is used to delete the record from (user table)
 *      description: This api is used to delete the record from (user table)
 *      parameters:
 *          - in: path
 *            name: user_id
 *            required: true 
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: data is deleted successfully
 */



/**
 * @swagger
 * /viewMovies:
 *  get:
 *      summary: This api is used to check whether api is working or not in (movies table)
 *      description: This api is used to check whether api is working or not in (movies table)
 *      responses:
 *          200:
 *              description: To test Get method
 */



/**
 * @swagger
 *  components:
 *      schema:
 *         book_my_show:
 *                   type: object
 *                   properties:
 *                        movies_id:
 *                                type: integer
 *                        movie_name:
 *                                type: varchar
 *                        gener:
 *                                type: varchar
 *                        Date_of_release:
 *                                type: date
 *                        duration:
 *                                type: varchar
 *                        format:
 *                                type: varchar
 *                        screen_id:
 *                                type: varchar
 *                        cast:
 *                                type: varchar
 *                        description:
 *                                type: varchar
 *                        rating_review:
 *                                type: varchar
 */


/**
 * @swagger
 * /addMovies:
 *  post:
 *      summary: used to insert data into mysql database (movie table)
 *      description: This api is used to insert data into mysql database (movies table)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: Added successfully
 */


/**
 * @swagger
 * /updateMovies/{movies_id}:
 *  put:
 *      summary: used to update data into mysql database (movies table)
 *      description: This api is used to update data into mysql database (movies table)
 *      parameters:
 *          - in: path
 *            name: movies_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: updated successfully
 */

/**
 * @swagger
 * /deleteMovies/{movies_id}:
 *  delete:
 *      summary: This api is used to delete the record from (movies table)
 *      description: This api is used to delete the record from (movies table)
 *      parameters:
 *          - in: path
 *            name: movies_id
 *            required: true 
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: data is deleted successfully
 */



/**
 * @swagger
 * /viewpayments:
 *  get:
 *      summary: This api is used to check whether api is working or not in (payment table)
 *      description: This api is used to check whether api is working or not in (payment table)
 *      responses:
 *          200:
 *              description: To test Get method
 */

/**
 * @swagger
 * /viewpaymentsById/{payment_id}:
 *  get:
 *      summary: This api is used to check whether api is working or not in (payment table)
 *      description: This api is used to check whether api is working or not in (payment table)
 *      responses:
 *          200:
 *              description: To test Get method
 */

/**
 * @swagger
 * /viewpaymentsByBookId/{booking_id}:
 *  get:
 *      summary: This api is used to check whether api is working or not in (payment table)
 *      description: This api is used to check whether api is working or not in (payment table)
 *      responses:
 *          200:
 *              description: To test Get method
 */

/**
 * @swagger
 * /viewpaymentsById/{user_id}:
 *  get:
 *      summary: This api is used to check whether api is working or not in (payment table)
 *      description: This api is used to check whether api is working or not in (payment table)
 *      responses:
 *          200:
 *              description: To test Get method
 */

/**
 * @swagger
 *  components:
 *      schema:
 *         book_my_show:
 *                   type: object
 *                   properties:
 *                        payment_id:
 *                                type: integer
 *                        total_pay:
 *                                type: integer
 *                        user_id:
 *                                type: integer
 *                        booking_id:
 *                                type: integer
 *                        payment_gateway:
 *                                type: varchar
 *                        status:
 *                                type: varchar
 */


/**
 * @swagger
 * /addpayments:
 *  post:
 *      summary: used to insert data into mysql database (payment table)
 *      description: This api is used to insert data into mysql database (payment table)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: Added successfully
 */


/**
 * @swagger
 * /updatepayments/{payment_id}:
 *  put:
 *      summary: used to update data into mysql database (payment table)
 *      description: This api is used to update data into mysql database (payment table)
 *      parameters:
 *          - in: path
 *            name: payment_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: updated successfully
 */

/**
 * @swagger
 * /deletepayments/{payment_id}:
 *  delete:
 *      summary: This api is used to delete the record from (payment table)
 *      description: This api is used to delete the record from (payment table)
 *      parameters:
 *          - in: path
 *            name: payment_id
 *            required: true 
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: data is deleted successfully
 */



/**
 * @swagger
 * /viewscreen:
 *  get:
 *      summary: This api is used to check whether api is working or not in (screens table)
 *      description: This api is used to check whether api is working or not in (screens table)
 *      responses:
 *          200:
 *              description: To test Get method
 */

/**
 * @swagger
 * /viewscreenById:
 *  get:
 *      summary: This api is used to check whether api is working or not in (screens table)
 *      description: This api is used to check whether api is working or not in (screens table)
 *      responses:
 *          200:
 *              description: To test Get method
 */

/**
 * @swagger
 * /viewscreenById:
 *  get:
 *      summary: This api is used to check whether api is working or not in (screens table)
 *      description: This api is used to check whether api is working or not in (screens table)
 *      responses:
 *          200:
 *              description: To test Get method
 */




/**
* @swagger
*  components:
*      schema:
*         book_my_show:
*                   type: object
*                   properties:
*                        screens_id:
*                                type: integer
*                        screen_name:
*                                type: varchar
*                        screen_type:
*                                type: varchar
*                        screen_size:
*                                type: integer
*                        no_of _seats:
*                                type: integer
*                        theater_id:
*                                type: integer
*                        running_shows:
*                                type: interger   
*/


/**
* @swagger
* /addscreen:
*  post:
*      summary: used to insert data into mysql database (screens table)
*      description: This api is used to insert data into mysql database (screens table)
*      requestBody:
*          required: true
*          content:
*              application/json:
*                  schema:
*                      $ref: '#components/schema/book_my_show'
*      responses:
*          200:
*              description: Added successfully
*/


/**
* @swagger
* /updatescreen/{screens_id}:
*  put:
*      summary: used to update data into mysql database (screens table)
*      description: This api is used to update data into mysql database (screens table)
*      parameters:
*          - in: path
*            name: screens_id
*            required: true
*            description: Numeric id is required
*            schema:
*              type: integer
*      requestBody:
*          required: true
*          content:
*              application/json:
*                  schema:
*                      $ref: '#components/schema/book_my_show'
*      responses:
*          200:
*              description: updated successfully
*/

/**
* @swagger
* /deletescreen/{screens_id}:
*  delete:
*      summary: This api is used to delete the record from (screen table)
*      description: This api is used to delete the record from (screen table)
*      parameters:
*          - in: path
*            name: screens_id
*            required: true 
*            description: Numeric id is required
*            schema:
*              type: integer
*      responses:
*          200:
*              description: data is deleted successfully
*/



/**
 * @swagger
 * /viewseat:
 *  get:
 *      summary: This api is used to check whether api is working or not in (seats table)
 *      description: This api is used to check whether api is working or not in (seats table)
 *      responses:
 *          200:
 *              description: To test Get method
 */

/**
 * @swagger
 * /viewseatById/{seat_id}:
 *  get:
 *      summary: This api is used to check whether api is working or not in (seats table)
 *      description: This api is used to check whether api is working or not in (seats table)
 *      responses:
 *          200:
 *              description: To test Get method
 */
/**
 * @swagger
 * /viewseatByScreensId/{screens_id}:
 *  get:
 *      summary: This api is used to check whether api is working or not in (seats table)
 *      description: This api is used to check whether api is working or not in (seats table)
 *      responses:
 *          200:
 *              description: To test Get method
 */

/**
* @swagger
*  components:
*      schema:
*         book_my_show:
*                   type: object
*                   properties:
*                        seat_id:
*                                type: integer
*                        seat_type:
*                                type: varchar
*                        seat_name:
*                                type: varchar
*                        fare:
*                                type: integer
*                        status:
*                                type: varchar   
*/


/**
* @swagger
* /addSeat:
*  post:
*      summary: used to insert data into mysql database (seats table)
*      description: This api is used to insert data into mysql database (seats table)
*      requestBody:
*          required: true
*          content:
*              application/json:
*                  schema:
*                      $ref: '#components/schema/book_my_show'
*      responses:
*          200:
*              description: Added successfully
*/


/**
* @swagger
* /updateSeat/{seat_id}:
*  put:
*      summary: used to update data into mysql database (seats table)
*      description: This api is used to update data into mysql database (seats table)
*      parameters:
*          - in: path
*            name: seat_id
*            required: true
*            description: Numeric id is required
*            schema:
*              type: integer
*      requestBody:
*          required: true
*          content:
*              application/json:
*                  schema:
*                      $ref: '#components/schema/book_my_show'
*      responses:
*          200:
*              description: updated successfully
*/

/**
* @swagger
* /deleteSeat/{seat_id}:
*  delete:
*      summary: This api is used to delete the record from (seats table)
*      description: This api is used to delete the record from (seats table)
*      parameters:
*          - in: path
*            name: seat_id
*            required: true 
*            description: Numeric id is required
*            schema:
*              type: integer
*      responses:
*          200:
*              description: data is deleted successfully
*/



/**
 * @swagger
 * /viewshows:
 *  get:
 *      summary: This api is used to check whether api is working or not in (shows table)
 *      description: This api is used to check whether api is working or not in (shows table)
 *      responses:
 *          200:
 *              description: To test Get method
 */

/**
 * @swagger
 * /viewshowsById/{show_id}:
 *  get:
 *      summary: This api is used to check whether api is working or not in (shows table)
 *      description: This api is used to check whether api is working or not in (shows table)
 *      responses:
 *          200:
 *              description: To test Get method
 */

/**
 * @swagger
 * /viewshowsByScreenId/{screens_id}:
 *  get:
 *      summary: This api is used to check whether api is working or not in (shows table)
 *      description: This api is used to check whether api is working or not in (shows table)
 *      responses:
 *          200:
 *              description: To test Get method
 */

/**
 * @swagger
 * /viewshowsByMovieId/{movie_id}:
 *  get:
 *      summary: This api is used to check whether api is working or not in (shows table)
 *      description: This api is used to check whether api is working or not in (shows table)
 *      responses:
 *          200:
 *              description: To test Get method
 */


/**
* @swagger
*  components:
*      schema:
*         book_my_show:
*                   type: object
*                   properties:
*                        show_id:
*                                type: integer
*                        movie_id:
*                                type: integer
*                        screen_id:
*                                type: varchar
*                        date:
*                                type: date
*                        start_time:
*                                type: time
*                        end_time:
*                                type: time   
*/


/**
* @swagger
* /addshows:
*  post:
*      summary: used to insert data into mysql database (shows table)
*      description: This api is used to insert data into mysql database (shows table)
*      requestBody:
*          required: true
*          content:
*              application/json:
*                  schema:
*                      $ref: '#components/schema/book_my_show'
*      responses:
*          200:
*              description: Added successfully
*/


/**
* @swagger
* /updateshows/{show_id}:
*  put:
*      summary: used to update data into mysql database (shows table)
*      description: This api is used to update data into mysql database (shows table)
*      parameters:
*          - in: path
*            name: show_id
*            required: true
*            description: Numeric id is required
*            schema:
*              type: integer
*      requestBody:
*          required: true
*          content:
*              application/json:
*                  schema:
*                      $ref: '#components/schema/book_my_show'
*      responses:
*          200:
*              description: updated successfully
*/

/**
* @swagger
* /deleteshows/{show_id}:
*  delete:
*      summary: This api is used to delete the record from (shows table)
*      description: This api is used to delete the record from (shows table)
*      parameters:
*          - in: path
*            name: show_id
*            required: true 
*            description: Numeric id is required
*            schema:
*              type: integer
*      responses:
*          200:
*              description: data is deleted successfully
*/




/**
 * @swagger
 * /viewtheater:
 *  get:
 *      summary: This api is used to check whether api is working or not in (theater table)
 *      description: This api is used to check whether api is working or not in (theater table)
 *      responses:
 *          200:
 *              description: To test Get method
 */



/**
* @swagger
*  components:
*      schema:
*         book_my_show:
*                   type: object
*                   properties:
*                        theater_id:
*                                type: integer
*                        theater_name:
*                                type: varchar
*                        theater_address:
*                                type: varchar
*                        city:
*                                type: varchar
*                        theater_type:
*                                type: varchar
*                        no_of_screens:
*                                type: integer
*                        owner_id:
*                                type: integer
*                        running_movies:
*                                type: interger   
*/


/**
* @swagger
* /addtheater:
*  post:
*      summary: used to insert data into mysql database (Theater table)
*      description: This api is used to insert data into mysql database (Theater table)
*      requestBody:
*          required: true
*          content:
*              application/json:
*                  schema:
*                      $ref: '#components/schema/book_my_show'
*      responses:
*          200:
*              description: Added successfully
*/


/**
* @swagger
* /updatetheater/{theater_id}:
*  put:
*      summary: used to update data into mysql database (Theater table)
*      description: This api is used to update data into mysql database (Theater table)
*      parameters:
*          - in: path
*            name: theater_id
*            required: true
*            description: Numeric id is required
*            schema:
*              type: integer
*      requestBody:
*          required: true
*          content:
*              application/json:
*                  schema:
*                      $ref: '#components/schema/book_my_show'
*      responses:
*          200:
*              description: updated successfully
*/

/**
* @swagger
* /deletetheater/{theater_id}:
*  delete:
*      summary: This api is used to delete the record from (theater table)
*      description: This api is used to delete the record from (theater table)
*      parameters:
*          - in: path
*            name: theater_id
*            required: true 
*            description: Numeric id is required
*            schema:
*              type: integer
*      responses:
*          200:
*              description: data is deleted successfully
*/



/**
 * @swagger
 * /viewbooking:
 *  get:
 *      summary: This api is used to check whether api is working or not in (booking_details table)
 *      description: This api is used to check whether api is working or not in (booking_details table)
 *      responses:
 *          200:
 *              description: To test Get method
 */

/**
 * @swagger
 * /viewbookingById/{booking_id}:
 *  get:
 *      summary: This api is used to check whether api is working or not in (booking_details table)
 *      description: This api is used to check whether api is working or not in (booking_details table)
 *      responses:
 *          200:
 *              description: To test Get method
 */

/**
 * @swagger
 * /viewbookingByUserId/{user_id}:
 *  get:
 *      summary: This api is used to check whether api is working or not in (booking_details table)
 *      description: This api is used to check whether api is working or not in (booking_details table)
 *      responses:
 *          200:
 *              description: To test Get method
 */

/**
* @swagger
*  components:
*      schema:
*         book_my_show:
*                   type: object
*                   properties:
*                        booking_id:
*                                type: integer
*                        no_of_seats:
*                                type: integer
*                        total_fare:
*                                type: interger
*                        seat_type:
*                                type: varchar
*                        seat_id:
*                                type: integer
*                        screen_id:
*                                type:integer
*                        movie_id:
*                                type: interger 
*                        booking_time:
*                                type: timestamp
*                        show_time:
*                                type: time
*                        theater_id:
*                                type: integer              
*/


/**
* @swagger
* /addbooking:
*  post:
*      summary: used to insert data into mysql database (booking_details table)
*      description: This api is used to insert data into mysql database (booking_details table)
*      requestBody:
*          required: true
*          content:
*              application/json:
*                  schema:
*                      $ref: '#components/schema/book_my_show'
*      responses:
*          200:
*              description: Added successfully
*/


/**
* @swagger
* /updatebooking/{booking_id}:
*  put:
*      summary: used to update data into mysql database (booking_details table)
*      description: This api is used to update data into mysql database (booking_details table)
*      parameters:
*          - in: path
*            name: booking_id
*            required: true
*            description: Numeric id is required
*            schema:
*              type: integer
*      requestBody:
*          required: true
*          content:
*              application/json:
*                  schema:
*                      $ref: '#components/schema/book_my_show'
*      responses:
*          200:
*              description: updated successfully
*/

/**
* @swagger
* /deletebooking/{booking_id}:
*  delete:
*      summary: This api is used to delete the record from (booking table)
*      description: This api is used to delete the record from (booking table)
*      parameters:
*          - in: path
*            name: booking_id
*            required: true 
*            description: Numeric id is required
*            schema:
*              type: integer
*      responses:
*          200:
*              description: data is deleted successfully
*/



/**
 * @swagger
 * /viewcancel:
 *  get:
 *      summary: This api is used to check whether api is working or not in (Cancel_booking table)
 *      description: This api is used to check whether api is working or not in (Cancel_booking table)
 *      responses:
 *          200:
 *              description: To test Get method
 */

/**
 * @swagger
 * /viewcancelById/{user_id}:
 *  get:
 *      summary: This api is used to check whether api is working or not in (Cancel_booking table)
 *      description: This api is used to check whether api is working or not in (Cancel_booking table)
 *      responses:
 *          200:
 *              description: To test Get method
 */

/**
* @swagger
*  components:
*      schema:
*         book_my_show:
*                   type: object
*                   properties:
*                        booking_id:
*                                type: integer
*                        cancel_id:
*                                type: integer
*                        user_id:
*                                type: interger
*                        status:
*                                type: varchar             
*/


/**
* @swagger
* /addcancel:
*  post:
*      summary: used to insert data into mysql database (booking_details table)
*      description: This api is used to insert data into mysql database (booking_details table)
*      requestBody:
*          required: true
*          content:
*              application/json:
*                  schema:
*                      $ref: '#components/schema/book_my_show'
*      responses:
*          200:
*              description: Added successfully
*/


/**
* @swagger
* /updatecancel/{booking_id}:
*  put:
*      summary: used to update data into mysql database (booking_details table)
*      description: This api is used to update data into mysql database (booking_details table)
*      parameters:
*          - in: path
*            name: booking_id
*            required: true
*            description: Numeric id is required
*            schema:
*              type: integer
*      requestBody:
*          required: true
*          content:
*              application/json:
*                  schema:
*                      $ref:'#components/schema/book_my_show'
*      responses:
*          200:
*              description: updated successfully
*/

/**
* @swagger
* /deletecancel/{booking_id}:
*  delete:
*      summary: This api is used to delete the record from (booking table)
*      description: This api is used to delete the record from (booking table)
*      parameters:
*          - in: path
*            name: booking_id
*            required: true 
*            description: Numeric id is required
*            schema:
*              type: integer
*      responses:
*          200:
*              description: data is deleted successfully
*/





app.listen(port, (err) => {
    if (err) {
        console.log("Error while connecting with server")
    }
    else {
        console.log(`Server has been Started at  ${port}`);
    }

})


