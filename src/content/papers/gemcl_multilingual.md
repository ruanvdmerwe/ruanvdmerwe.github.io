---
title: "Does Language Matter for Spoken Word Classification? A Multilingual Generative Meta-Learning Approach"
authors:
  - "Batsirayi Mupamhi Ziki"
  - "Louise Beyers"
  - "Ruan van der Merwe"
venue: "arXiv preprint arXiv:2605.13084"
year: 2026
type: preprint
selected: true
order: 2
arxiv: "https://arxiv.org/abs/2605.13084"
bibtex: |
  @article{ziki2026multilingual,
    title         = {Does Language Matter for Spoken Word Classification? A
                     Multilingual Generative Meta-Learning Approach},
    author        = {Ziki, Batsirayi Mupamhi and Beyers, Louise and
                     van der Merwe, Ruan},
    journal       = {arXiv preprint arXiv:2605.13084},
    year          = {2026},
    eprint        = {2605.13084},
    archivePrefix = {arXiv},
    primaryClass  = {cs.CL},
  }
---

Meta-learning outperforms supervised learning for few-shot monolingual spoken word
classification, yet remains under-explored in the multilingual setting. We apply the
**Generative Meta-Continual Learning (GeMCL)** algorithm to spoken word
classification &mdash; its generative nature makes it viable in application, while
the meta-learning component promotes the generalisation that multilingual use
demands.

We train monolingual models on English, German, French, and Catalan, a bilingual
model on English and German, and a multilingual model on all four languages.
Although the multilingual model performs best, the differences between models are
unexpectedly small. We also find that the hours of unique data seen during training
is a stronger performance indicator than the number of languages in the training
data.
