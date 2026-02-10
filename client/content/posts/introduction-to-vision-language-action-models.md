---
title: "Introduction to Vision Language Action Models"
date: "2026-02-10"
summary: ""
---

\[[Google Slides](https://docs.google.com/presentation/d/1Ckybi4q_dL8xZE2ji8gHUM8Zl1t7SmkatDzElgwX4N8/edit?usp=sharing)\]

This slide covers,

1. What are VLAs?

2. Evolution of VLAs.

    - Initial research on leveraging transformers as vision language to action mappper.

    - Treating actions as language modeling, leveraging pre-trained vision language models for generality.

    - Using diffusion transformers to be an action expert, result in denser action sequence generation in chunks (acheiving higher frequency action outputs and being able to perform dexterous tasks)

    - open-source models and open-source datasets

3. Key questions in the current state.

    - How do we train action experts with internet-scale video demonstrations?

    - RL post-training via World Models for policy exploration

4. My mid- to long-term vision

    - Researches show that maximizing a single physical agents reward results in a collaborative scenario, results in a stable but suboptimal system state. While building collaborative physical agents is inevitable to solve bigger and complex tasks, we need to devise a physical agent orchestration algorithm to avoid collective frustration.
