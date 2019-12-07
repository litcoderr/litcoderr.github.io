---
layout: post
title: ML Study Log 1
tags: [ML, Study]
---
- [Entropy-KAIST ML Youtube](https://www.youtube.com/watch?v=kG-IVxyUAUM&list=PLbhbGIppZISMV4tAWHlytBqNq1-lb8bz&index=9)
- [Linear Regression-KAIST ML Youtube](https://www.youtube.com/watch?v=70tDiv30WrM&list=PLbhbGI_ppZISMV4tAWHlytBqNq1-lb8bz&index=10)
- [Optimal Classifier-KAIST ML Youtube](https://www.youtube.com/watch?v=ndvZKwZw5tQ&list=PLbhbGI_ppZISMV4tAWHlytBqNq1-lb8bz&index=11)
- [Naive Bayse Classifier-KAIST ML Youtube](https://www.youtube.com/watch?v=OzBehvcqW_0&list=PLbhbGI_ppZISMV4tAWHlytBqNq1-lb8bz&index=12)

## Entropy and Decision Tree
- Higher the entropy, higher the uncertainty
- ```H(X) = -sum_x(P(X=x) * log b(P(X=x)))``` : Entropy of X .. note that diverse the distribution of X, higher the entropy
- ```H(Y|X) = sum_x(P(X=x) * H(Y|X=x))``` : Entropy of Y given X
- ```Information Gain = H(Y) - H(Y|X i)``` : Selecting Highest Information Gain Node == Decision Tree Algorithm
- Decision Tree 의 한계: 노드 수가 증가할수록 노이즈에 의한 오차 발생 증가

## Linear Regression 
- ```H(theta, X) = X * theta``` : Hypothesis Function -> Find Best Fitting Theta
- ```Y = H(theta, X) - error``` : Minimize error
- ```theta = inv(transpose(X) * X) * transpose(X) * Y``` : error term의 gradient = 0을 풀어서 최소 error 점을 구함
- 새로운 non-linear 함수를 사용하면 over-fitting의 가능성있음

## Naive Bayes Classifier
- ```F_(x) = argmax(P(Y=y|X=x))``` : Find function that has maximum probability of Y=y given X=x
- ```argmax(P(Y=y|X=x)) == argmax(P(X=x|Y=y) * P(Y=y))``` : since 비례관계, argmax term에 의해 성립
- ```F_(x1,x2,...xn) = argmax(P(Y=y) * pi(P(x_i|Y=y)))``` : X feature가 n개이고 independent (Naive Assumption)하다고 가정 -> 경우 generalized form


