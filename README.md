## Cause and burn in devlopment

This repository contains the experiments, data, analyses, and figures for the paper "Cause and burn in development," by David Rose, Siying Zhang, Shaun Nichols, Ellen Markman and Tobias Gerstenberg.

<!-- The preprint can be found [here](update link) -->

__Contents__:
- [Introduction](#Introduction)
- [Repository structure](#Repository-structure)

## Introduction

<img src="figures/storyboard.png" width="100%" align="center">

<br clear="left" />
<br clear="right" />

A fundamental way to reason about causation is in terms of direct contact, like billiard balls colliding. Although collision-like causes have played an important role in philosophical and psychological theories of causation, humans conceptualize many events that lack direct contact as causes. If Andy hits Suzy with his bike, Suzy falls into a fence and it breaks, Andy is a cause of the fence breaking. We also treat absences as causes. If Suzy forgets sunscreen and gets sunburned, the absence of sunscreen is a cause. Moreover, there are linguistic distinctions between verbs that refer to these: Andy “caused” the fence to break but Suzy “broke” it. The absence of sunscreen “caused” Suzy’s sunburn, but the sun “burned” it. We explored how children develop these mappings, focusing on “cause” and verbs like “burn”. Because “made” is more frequent than “cause”, we included it too. We tested 690 children and 150 adults. Experiment 1 examined causal chains. Children as young as 4 thought Andy “caused” the fence to break, but Suzy “broke” it and “made” it break.  Experiment 2 examined causation by absence. Only older children thought the absence of sunscreen “caused” the sunburn.  Yet in Experiment 3, even 4-year-olds cited absences in explaining Suzy’s sunburn. Despite rarely hearing “cause”, young children understand it and verbs like “break” to mark subtle distinctions between causes: “break” refers to direct causes; “cause” to indirect causes in chains. Absences are more challenging, but children refer to them in causal explanations before mapping “cause” to them.  


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
