# DESIGN PATTERNS

Codebase that accompanied talk @iCappsBarcamp Feb 2017 on design patterns in
node js in the light of code quality and automated testing.

The goal is to create code
    - with high cohesion (SRP)
    - loose coupling (DInj & DInv)

This way it is easily testable in isolation (London style vs Chicago style).

You can browse this repo by its branches.

### [master](https://github.com/samover/designPatternsTalk/tree/master)

Contains the starter code, loosely based on Marco Casciaro's example in his excellent book on *Design Patterns in Node*. Here you may find a tight coupling between the domain layer and the data layer. The only way to test the services in isolation from the database, would be to use something like [proxyquire](https://github.com/thlorenz/proxyquire), which hacks directly into the node `require` module. Not a pretty sight :-/

![schema 1](/images/thighCoupling.png?raw=true)

### [dependencyInjection](https://github.com/samover/designPatternsTalk/tree/dependencyInjection)

This branch implements basic DI and wires up the modules at the highest level. Clean testing assured, but database specific syntax is still present in domain layer.

![schema 2](/images/dependencyInjection.png?raw=true)

### [dependencyInversion](https://github.com/samover/designPatternsTalk/tree/dependencyInversion)
>>>>>>> ee15d78... Update README.md

Implementation of `Repository`  and `Factory` pattern. Database specific syntax is now abstracted behind a repository and the structure of the domain object is decoupled from the data structure.

![schema 3](/images/furtherAbstraction.png?raw=true)

## what else?

A last step would be the introduction of a DI container in order to simplify the module wiring.
