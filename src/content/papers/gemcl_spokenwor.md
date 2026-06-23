---
title: "Scaling Few-Shot Spoken Word Classification With Generative Meta-Continual Learning"
authors:
  - "Louise Beyers"
  - "Batsirayi Mupamhi Ziki"
  - "Ruan van der Merwe"
venue: "Interspeech 2026"
year: 2026
type: conference
selected: true
order: 1
arxiv: "https://arxiv.org/abs/2605.13075"
bibtex: |
  @inproceedings{beyers2026gemcl,
    title     = {Scaling Few-Shot Spoken Word Classification With
                 Generative Meta-Continual Learning},
    author    = {Beyers, Louise and Ziki, Batsirayi Mupamhi and
                 van der Merwe, Ruan},
    booktitle = {Interspeech},
    year      = {2026},
  }
---

Asks whether a spoken word classifier can sequentially learn to distinguish 1000
classes from only five examples per class. We train a model with the **Generative
Meta-Continual Learning (GeMCL)** algorithm and compare it against strong baselines
for this large-scale, few-shot continual setting.

GeMCL delivers exceptionally stable performance and adapts roughly 2000&times;
faster than a frozen HuBERT encoder with repeatedly retrained classifiers, though
it does not always surpass fully fine-tuned baselines. The result points toward
practical, rapidly-adaptable keyword systems that keep accumulating new classes
without retraining from scratch.
