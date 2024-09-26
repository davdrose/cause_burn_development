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
│   ├── experiment1
│   ├── experiment2
│   └── experiment3
├── figures
│   ├── experiment1
│   ├── experiment2
│   └── experiment3


```

- `code/` contains all the code for the experiments, analyzing data and generating figures.
  - `experiments` contains code for each experiment that was run. Pre-registrations for all experiments may be accessed via the Open Science Framework [here](UPDATE). All experiments with adults were run in jsPsych and all experiments with children were run in Lookit. 
	- `experiment1` 
		- `cause`
			- adults ([pre-registration](https://osf.io/wfg3p)) 
			- children ([pre-registration](https://osf.io/e2buz)) 
		- `made`
			- adults ([pre-registration](https://osf.io/achv6)) 
			- children ([pre-registration](https://osf.io/ph5tr)) 
	- `experiment2` 
		- `cause`
			- adults ([pre-registration](https://osf.io/f7k59)) 
			- children (4- 6) ([pre-registration](https://osf.io/u3g8r)) and (7- 9) ([pre-registration](https://osf.io/3ha4k)) 
		- `made`
			- adults and children ([pre-registration](https://osf.io/ybsc5)) 
	- `experiment3`
		- adults and children ([pre-registration](https://osf.io/29k5h)) 
- `R` contains the analysis scripts that were used to analyze data and generate figures
	 (view a rendered file [here](https://davdrose.github.io/cause_burn_development/)).
- `data/` contains anonymized data from all experiments
- `docs/` contains all the experiment code for the adult versions of each experiment. You can preview the experiments below:
    - Experiment 1 - [cause vs lexical](https://davdrose.github.io/cause_burn_development/experiment1/cause/index.html),
      [made vs lexical](https://davdrose.github.io/cause_burn_development/experiment1/made/index.html)
    - Experiment 2 - [cause vs lexical](https://davdrose.github.io/cause_burn_development/experiment2/cause/index.html),
      [made vs lexical](https://davdrose.github.io/cause_burn_development/experiment2/made/index.html)
	- Experiment 3 - [explanation](https://davdrose.github.io/cause_burn_development/experiment3/index.html)
- `figures/` contains all the figures from the paper (generated using the script in `code/R/`). 
