---
title: "Mitigating Catastrophic Forgetting for Few-Shot Spoken Word Classification Through Meta-Learning"
authors:
  - "Ruan van der Merwe"
  - "Herman Kamper"
venue: "Interspeech 2023, pp. 441–445"
year: 2023
type: conference
selected: true
order: 1
arxiv: "https://arxiv.org/abs/2305.13080"
bibtex: |
  @inproceedings{vandermerwe2023mamlcon,
    title     = {Mitigating Catastrophic Forgetting for Few-Shot Spoken Word
                 Classification Through Meta-Learning},
    author    = {van der Merwe, Ruan and Kamper, Herman},
    booktitle = {Interspeech},
    pages     = {441--445},
    year      = {2023},
  }
---

Proposes **MAMLCon**, an extension of model-agnostic meta-learning (MAML) for
continual few-shot spoken word classification. Each inner learning loop concludes
with a consolidation gradient step that uses stored templates (one per class) drawn
from all previously seen classes, letting the model rehearse without a large replay
buffer.

MAMLCon consistently outperforms OML (Online-aware Meta-Learning) across varying
numbers of shots and final class counts on Google Speech Commands and the FACC
dataset. It targets the practical setting of user-defined keyword systems where new
words are added incrementally, showing that meta-learning can mitigate catastrophic
forgetting in genuinely on-device regimes.
