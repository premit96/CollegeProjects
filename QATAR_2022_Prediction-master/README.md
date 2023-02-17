# World Cup QATAR 2022 Prediction: Project Overview

This project aims to predict the results of the QATAR 2022 World Cup from the international matches held since the 90s, the qualifications of the teams in their last matches, and the potential of each team.

## Resources Used

* Python Version: 3.7
* Packages: Pandas, NumPy, Sklearn, Tensorflow, and Seaborn.
* Data: 
  * [international_matches.csv](https://www.kaggle.com/datasets/brenda89/fifa-world-cup-2022) - This dataset provides a complete overview of all international soccer matches played since the 90s. On top of that, the strength of each team is provided by incorporating actual FIFA rankings as well as player strengths based on the EA Sport FIFA video game.
  * [players_22.csv](https://www.kaggle.com/datasets/stefanoleone992/fifa-22-complete-player-dataset) - The datasets provided include the player data for FIFA 22 Career Mode.

## Data preparation and dataset creation

* Both datasets [international_matches.csv](https://github.com/davidcamilo0710/QATAR_2022_Prediction/blob/master/data/international_matches.csv) and [players_22.csv](https://github.com/davidcamilo0710/QATAR_2022_Prediction/blob/master/data/players_22.csv) were prepared for analysis and the creation of the training dataset of the Machine learning model. The preparation consists of fixing the na's values and removing the information of the teams that will not participate in the cup.

* From dataset [international_matches.csv](https://github.com/davidcamilo0710/QATAR_2022_Prediction/blob/master/data/international_matches.csv), create training dataset [training.csv](https://github.com/davidcamilo0710/QATAR_2022_Prediction/blob/master/data/training.csv) and inference dataset [last_team_scores.csv](https://github.com/davidcamilo0710/QATAR_2022_Prediction/blob/master/data/last_team_scores.csv). [training.csv](https://github.com/davidcamilo0710/QATAR_2022_Prediction/blob/master/data/training.csv) contains the names of the teams facing each other, the FIFA ranking of each team, and the rating of both teams' defense, midfield, and offense. On the other hand, the inference dataset contains the qualification of each team on its last FIFA date.


## Modeling and Tuning

The [Modeling+Tuning.ipynb](https://github.com/davidcamilo0710/QATAR_2022_Prediction/blob/master/Modeling%2BTuning.ipynb) notebook aims to train the Machine learning model that will predict the outcome of the World Cup matches. This notebook chooses one ML model to predict the group stage matches and another for the knockout stage. the difference is that the result of the group stage matches can be a loss, a draw, or a win. On the other hand, in the direct elimination stage, there is only defeat or victory. The best model for each stage is chosen among the algorithms:

* Random Forest
* Ada Boost Classifier
* XGB Boost
* Neural Networks

The XGB Boost model presents the best performance in both stages. Therefore it is tuned, validated, and exported as a pipeline to perform easy inferences.

* Confusion matrix of the group stage model tuned and validated


* Confusion matrix of the knockout stage model tuned and validated


## Predictions

Finally, notebook [Predictions.ipynb](https://github.com/davidcamilo0710/QATAR_2022_Prediction/blob/master/Predictions.ipynb) uses the inference datasets and the trained models to predict the World Cup matches and thus find the winner of the World Cup. It is essential to mention that to choose who is the home team in each World Cup match, use dataset [squad_stats.csv](https://github.com/davidcamilo0710/QATAR_2022_Prediction/blob/master/data/squad_stats.csv), which provides the potential of each team; therefore, the team with more significant potential will be the home team.
