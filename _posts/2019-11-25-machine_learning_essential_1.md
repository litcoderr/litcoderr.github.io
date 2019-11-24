---
layout: post
title: ML Study Log 1
tags: [ML, Research]
---
- [Entropy-KAIST ML Youtube](https://www.youtube.com/watch?v=kG-IVxyUAUM&list=PLbhbGI ppZISMV4tAWHlytBqNq1-lb8bz&index=9)

## Entropy and Decision Tree
- Higher the entropy, higher the uncertainty
- H(X) = -sum x(P(X=x) * log b(P(X=x))) : Entropy of X .. note that diverse the distribution of X, higher the entropy
- H(Y|X) = sum x(P(X=x) * H(Y|X=x)) : Entropy of Y given X
- Information Gain = H(Y) - H(Y|X i) : Selecting Highest Information Gain Node == Decision Tree Algorithm
- Decision Tree 의 한계: 노드 수가 증가할수록 노이즈에 의한 오차 발생 증가


