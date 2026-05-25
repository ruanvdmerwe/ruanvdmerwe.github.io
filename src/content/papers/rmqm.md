---
title: "Manifold Characteristics That Predict Downstream Task Performance"
authors:
  - "Ruan H. van der Merwe"
  - "Gregory Newman"
  - "Etienne Barnard"
venue: "First Workshop on Pre-training: Perspectives, Pitfalls, and Paths Forward at ICML 2022"
year: 2022
type: workshop
selected: true
order: 2
arxiv: "https://arxiv.org/abs/2205.07477"
bibtex: |
  @inproceedings{vandermerwe2022rmqm,
    title     = {Manifold Characteristics That Predict Downstream Task Performance},
    author    = {van der Merwe, Ruan H. and Newman, Gregory and Barnard, Etienne},
    booktitle = {First Workshop on Pre-training: Perspectives, Pitfalls,
                 and Paths Forward at ICML},
    year      = {2022},
  }
---

Introduces the **Representation Manifold Quality Metric (RMQM)**, a principled
geometric measure of learned representation quality that correlates positively with
downstream task performance.

We characterise representation manifolds by tracking how data points move under
sequentially larger perturbations &mdash; white-noise injection and PGD adversarial
attacks &mdash; revealing that self-supervised methods learn smoother manifolds
with larger but more consistent step sizes. RMQM gives a framework for comparing
pretraining methods beyond the usual linear-probe accuracy, enabling more detailed
structural analysis of embedding spaces.
