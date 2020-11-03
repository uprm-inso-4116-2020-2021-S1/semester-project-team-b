import { Box, Card, createStyles, fade, Grid, makeStyles, Theme, Typography, Button, CardContent, ButtonGroup, Divider, TextField, FormControl } from '@material-ui/core'
import Link from 'next/link'
import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GradeIcon from '@material-ui/icons/Grade';

export default function Home() {
    const classes = useStyles();
    return(
        <>
        <Box width="100%" maxHeight="500" position="absolute" top={0} >
            <img src="/backgroundImage.png" style={{width:"100%",maxHeight:750, opacity:0.5, objectFit:'cover', position:"relative", zIndex:-1000}}/>
        </Box>
        <Grid
        container
        direction='column'
        alignItems="center"
        wrap="nowrap"
        className={classes.gridFull}
        >
            <Grid item>
                <Typography className={classes.title}>
                    InternView
                </Typography>
            </Grid>
            <Grid item className={classes.subtitle} style={{textAlign:"center"}} >
                <Typography variant="h5" style={{textAlign:"center"}}>
                    The best platform to research companies for students.<br />
                    Made by students for students.
                </Typography>
            </Grid>
            <Grid item className={classes.buttonSearch}>
                <Button variant="contained" color="primary">
                    Start Searching
                </Button>
            </Grid>

            <Grid container direction='row' justify="space-around" alignItems="center" wrap="nowrap" className={classes.gridCards}>

                <Grid item className={classes.gridItem}>
                    <Card className={classes.cardContainer}>
                        
                        <Grid container direction='column' alignItems="center" wrap="nowrap" className={classes.cardContent}>

                            <Grid item>
                                <Typography variant='h4'>
                                    Most Helpful Reviews
                                </Typography>
                            </Grid>

                            <Grid item className={classes.cardItem}>
                                <Grid container direction='row' justify='space-between' alignItems='center'>
                                    <Link href="/reviews/">
                                        <Button className={classes.buttonReview}>
                                        
                                            <Grid item className={classes.accountIconItem} xs={1}>
                                                <AccountCircleIcon className={classes.accountIcon} />
                                            </Grid>

                                            <Grid item className={classes.cardSub} zeroMinWidth xs={10}>
                                                <Button disabled className={classes.buttonReview}>
                                                        {/* <FormControl className={classes.reviewSummary}>
                                                            <TextField
                                                                variant='outlined'
                                                                value={'Lorem ipsum dolor sit amet, consectetur adipiscing elit . . . Nunc ornare interdum elementum. Suspendisse imperdiet ligula . . . '}
                                                                disabled={true}
                                                                multiline={true}
                                                                rows={2}
                                                                InputProps={{
                                                                    classes: {
                                                                        root: classes.inputRoot,
                                                                        disabled: classes.disabled,
                                                                    }   
                                                                }}
                                                            />
                                                        </FormControl> */}
                                                        <Card variant='outlined' className={classes.reviewSummary}>
                                                            <Typography className={classes.reviewText}>Sample Text</Typography>
                                                        </Card>
                                                </Button>
                                            </Grid>

                                            <Grid item xs={1}>
                                                <Grid container direction='row' alignItems="center" wrap="nowrap" className={classes.rating}>
                                                    <Grid item>
                                                        <GradeIcon fontSize="large"/>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography className={classes.ratingText}>5/5</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                        </Button>
                                    </Link>
                                </Grid>
                            </Grid>

                        </Grid>


                        <Link href="/profile/">
                            <Button>
                            user profile
                            </Button>
                        </Link>

                    </Card>
                </Grid>




                <Grid item className={classes.gridItem}>
                    <Card className={classes.cardContainer}>
                        <Grid
                        container
                        direction='column'
                        alignItems="center"
                        wrap="nowrap"
                        className={classes.cardContent}
                        >
                            <Grid item>
                                <Typography variant='h4'>
                                    Top Rated Companies
                                </Typography>
                            </Grid>
                            <Grid item className={classes.cardItem}>
                                <ButtonGroup variant="text" fullWidth={true}>
                                    <Grid item className={classes.accountIcon}>
                                        <Button>
                                            <AccountCircleIcon fontSize="large"/>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={9} className={classes.cardSub}>
                                        <Button>
                                            <Link href="/">
                                                <Typography>
                                                    Company X
                                                </Typography>
                                            </Link>
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Grid
                                        container
                                        direction='row'
                                        alignItems="center"
                                        wrap="nowrap"
                                        className={classes.rating}
                                        >
                                            <Grid item>
                                                <GradeIcon fontSize="large"/>
                                            </Grid>
                                            <Grid item>
                                                <Typography className={classes.ratingText}>5/5</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        gridFull: {
            marginTop: 40
        },
        gridCards: {
            paddingTop: theme.spacing(8)
        },
        gridItem: {
            minWidth: '42%',
            maxWidth: '42%',
            alignItems: "center",
            paddingBottom: theme.spacing(2)
        },
        cardContainer: {
            height: 600,
        },
        cardContent: {
            padding: theme.spacing(4),
            width: '100%',  
        },
        cardItem: {
            marginTop: 30,
            width: '100%',
        },
        cardSub: {
            // width: '80%',
        },
        buttonReview: {
            width: '100%' 
        },
        reviewSummary: {
            width: '90%',
            backgroundColor: theme.palette.info.main,
            height: 75,
        },
        reviewText: {
            color: theme.palette.secondary.contrastText,
        },
        inputRoot: {
            "&$disabled": {
              color: theme.palette.secondary.contrastText
            }
        },
        disabled: {

        },
        accountIconItem: {
            height: '100%',
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
        },
        accountIcon: {
            fontSize: 50
        },
        title: {
            color: theme.palette.primary.contrastText,
            fontSize: 80,

        },
        subtitle: {
            color: theme.palette.primary.contrastText,
        },
        buttonSearch: {
            paddingTop: theme.spacing(1)
        },
        rating: {
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingRight: theme.spacing(3)
        },
        ratingText: {
            fontSize: 20,
            paddingLeft: theme.spacing(1)
        },
    }))
