---
layout: post
title: Machine Learning Study Log 1
tags: [ML, Research]
---
# Machine Learning Study Log 1
- [Entropy](https://www.youtube.com/watch?v=kG-IVxyUAUM&list=PLbhbGI_ppZISMV4tAWHlytBqNq1-lb8bz&index=9)

## Entropy and Decision Tree
- Higher the entropy, higher the uncertainty
- H(X) = -sum_x(P(X=x) * log_b(P(X=x))) : Entropy of X .. note that diverse the distribution of X, higher the entropy
- H(Y|X) = sum_x(P(X=x) * H(Y|X=x)) : Entropy of Y given X
- Information Gain = H(Y) - H(Y|X_i) : Selecting Highest Information Gain Node == Decision Tree Algorithm
- Decision Tree 의 한계: 노드 수가 증가할수록 노이즈에 의한 오차 발생 증가


