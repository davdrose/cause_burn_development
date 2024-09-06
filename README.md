## Cause and burn in devlopment

This repository contains the experiments, data, analyses, and figures for the paper "Cause and burn in development," by David Rose, Siying Zhang, Shaun Nichols, Ellen Markman and Tobias Gerstenberg.

The preprint can be found [here](update link)

__Contents__:
- [Introduction](#Introduction)
- [Repository structure](#Repository-structure)

## Introduction

<img src="figures/storyboard.png" width="100%" align="center">

<br clear="left" />
<br clear="right" />

Add abstract here



## Repository structure

```
├── code
│   ├── R
│   ├── experiments
│   │   ├── experiment1
│   │   ├── ...
├── data
│   ├── experiment1
│   ├── experiment2
│   └── experiment3
├── docs
│   ├── experiment2
│   └── experiment3
├── figures
│   ├── experiment1
│   ├── experiment2
│   ├── experiment3


```

- `code/` contains all the code for the experiments, analyzing data and generating figures.
  - `experiments` contains code for each experiment that was run. Pre-registrations for all experiments may be accessed via the Open Science Framework [here](UPDATE). All experiments with adults were run in jsPsych and all experiments with children were run in Lookit. 
	- `experiment1` 
		- adults ([pre-registration](UPDATE)) 
		- childern ([pre-registration](UPDATE)) 
	- `experiment2` 
		- adults ([pre-registration](UPDATE)) 
		- childern ([pre-registration](UPDATE)) 
	- `experiment3`
		- adults ([pre-registration](UPDATE)) 
		- childern ([pre-registration](UPDATE)) 
  - `R` contains the analysis scripts that were used to analyze data and generate figures
	 (view a rendered file [here](UPDATE)).
- `data/` contains anonymized data from all experiments
- `docs/` contains all the experiment code for the adult versions of each experiment. You can preview the experiments below:
	- [Experiment 1](UPDATE)
	- [Experiment 2](UPDATE)
	- [Experiment 3](UPDATE)
- `figures/` contains all the figures from the paper (generated using the script in `code/R/`). 
