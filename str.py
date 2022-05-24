from abc import  ABC,abstractmethod
class Forme(ABC):
    def __init__(self,nom) -> None:
        self.nom=nom
    @abstractmethod
    def surface(self):
        pass
class Circle(Forme):
    def __str__(self) -> str:
        return super().__str__()

circle=Circle("circle")
print(circle)

