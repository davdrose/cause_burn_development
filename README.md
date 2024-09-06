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
  - `experiments` contains code for each experiment that was run. Pre-registrations for all experiments may be accessed via the Open Science Framework [here](https://osf.io/kh3xa/)
	- `experiment1` ([pre-registration](https://osf.io/4dux6)) was run in psiturk 
	- `experiment2` ([pre-registration](https://osf.io/a92nj)) and `experiment3` ([pre-registration](https://osf.io/zdegq)) were run in jsPsych. These are copied in `docs` below where they can be rendered in your browser.
  - `python` contains scripts that were used to get the probabilities of sentence completions for properties used in experiment 2.
  - `R` contains the analysis scripts that were used to analyze data and generate figures
	 (view a rendered file [here](https://cicl-stanford.github.io/teleology_generics/)).
- `data/` contains anonymized data from all experiments:
  - `experiment1` contains `experiment1.db` which includes trial and demographic data. 
  - `experiment2` contains `experiment2.csv` which includes the trial data and `experiment2_demographics.csv` which includes demographic data. The remaining files are for getting the probabilities of sentence completions from large language models for the properties used in experiment 2. 
  - `experiment3` contains `experiment3.csv` which includes the trial data for experiment 3 while `experiment2_demographics.csv` contains the demographic data.
- `docs/` contains all the experiment code for `experiment2` and `experiment3`. You can preview the experiments below:
	- Experiment 2 - [Generic condition](https://cicl-stanford.github.io/teleology_generics/experiment2/index.html?condition=1),
	  [Specific condition](https://cicl-stanford.github.io/teleology_generics/experiment2/index.html?condition=2)
	- Experiment 3 - [Generic condition](https://cicl-stanford.github.io/teleology_generics/experiment3/index.html?condition=1),
	  [Specific condition](https://cicl-stanford.github.io/teleology_generics/experiment3/index.html?condition=2)
- `figures/` contains all the figures from the paper (generated using the script in `code/R/`). 
